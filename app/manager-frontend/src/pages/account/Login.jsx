import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Link,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { PasswordField } from "components/forms/PasswordField";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { object, string } from "yup";
import { useResetState } from "helpers/hooks/useResetState";
import { useUser } from "contexts/User";
import { useBackendApi } from "contexts/BackendApi";
import { useBackendConfig } from "contexts/Config";
import { UsernameField } from "components/forms/UsernameField";
import { useScrollIntoView } from "helpers/hooks/useScrollIntoView";
import { HutchLogo } from "components/Logo";

const validationSchema = (t) =>
  object().shape({
    username: string()
      .test("valid-username", t("validation.username_valid"), (v) =>
        // this allows "@admin" style usernames
        string().isValidSync(v)
      )
      .required(t("validation.username_required")),
    password: string().required(t("validation.password_required")),
  });

export const Login = () => {
  const { t } = useTranslation();
  const { key, state } = useLocation();
  const navigate = useNavigate();
  const { signIn } = useUser();
  const {
    account: { login },
  } = useBackendApi();
  const { config } = useBackendConfig();

  // ajax submissions may cause feedback to display
  // but we reset feedback if the page should remount
  const [feedback, setFeedback] = useResetState([key]);

  const [scrollTarget, scrollTargetIntoView] = useScrollIntoView({
    behavior: "smooth",
  });

  const handleSubmit = async (values, actions) => {
    try {
      const { user } = await login(values).json();
      signIn(user);

      // redirect back to where we came from; otherwise the user home
      navigate(state?.from ?? "/");
      return;
    } catch (e) {
      switch (e?.response?.status) {
        case 400: {
          const result = await e.response.json();

          setFeedback({
            status: "error",
            message: result.isUnconfirmedAccount
              ? t("feedback.account.unconfirmedAccount")
              : t("login.feedback.loginFailed"),
            requireActivation: result.isUnconfirmedAccount,
          });

          break;
        }
        default:
          setFeedback({
            status: "error",
            message: t("feedback.error"),
          });
      }

      scrollTargetIntoView();
    }

    actions.setSubmitting(false);
  };

  return (
    <Container maxWidth="md" ref={scrollTarget} key={key} my={8}>
      <VStack align="stretch" spacing={4}>
        <Center>
          <HutchLogo
            logoColor={true}
            logoMaxWidth="170px"
            logoFillColor="#000"
          />
        </Center>

        <Heading as="h2" size="lg">
          {t("login.heading")}
        </Heading>

        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema(t)}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <VStack align="stretch" spacing={4}>
                {feedback?.status && (
                  <Alert status={feedback.status}>
                    <AlertIcon />
                    {feedback.message}
                  </Alert>
                )}

                {feedback?.requireActivation && (
                  <Alert status="info">
                    <AlertIcon />
                    {t("login.feedback.unconfirmedAccountInfo")}
                  </Alert>
                )}
                <UsernameField name="username" autoFocus />

                <PasswordField
                  fieldTip={
                    <Link
                      onClick={() =>
                        setFeedback({
                          status: "info",
                          message: t("login.feedback.passwordResetInfo"),
                        })
                      }
                    >
                      {t("login.links.forgotPassword")}
                    </Link>
                  }
                />

                <HStack justify="space-between">
                  <Button
                    w="200px"
                    colorScheme="blue"
                    leftIcon={<FaSignInAlt />}
                    type="submit"
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                  >
                    {t("buttons.login")}
                  </Button>

                  {config.Settings.Registration.toLowerCase() ===
                  "disabled" ? null : (
                    <Button
                      colorScheme="blue"
                      variant="link"
                      leftIcon={<FaUserPlus />}
                    >
                      <Link as={RouterLink} to="/account/register">
                        {t("login.links.register")}
                      </Link>
                    </Button>
                  )}
                </HStack>
              </VStack>
            </Form>
          )}
        </Formik>
      </VStack>
    </Container>
  );
};
