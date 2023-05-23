﻿// <auto-generated />
using HutchAgent.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace HutchAgent.Migrations
{
    [DbContext(typeof(HutchAgentContext))]
    partial class HutchAgentContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.5");

            modelBuilder.Entity("HutchAgent.Data.Entities.WfexsJob", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("RunFinished")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UnpackedPath")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("WfexsRunId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("WfexsJobs");
                });
#pragma warning restore 612, 618
        }
    }
}