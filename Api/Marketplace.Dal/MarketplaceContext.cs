// <copyright company="ROSEN Swiss AG">
//  Copyright (c) ROSEN Swiss AG
//  This computer program includes confidential, proprietary
//  information and is a trade secret of ROSEN. All use,
//  disclosure, or reproduction is prohibited unless authorized in
//  writing by an officer of ROSEN. All Rights Reserved.
// </copyright>

using System.Threading;
using System.Threading.Tasks;
using Marketplace.Core.Common;

namespace Marketplace.Dal
{
    using Marketplace.Core.Model;
    using Microsoft.EntityFrameworkCore;

    public class MarketplaceContext : DbContext, IMarketplaceContext
    {
        #region Properties

        public DbSet<Category> Categories { get; set; }

        public DbSet<Offer> Offers { get; set; }

        public DbSet<User> Users { get; set; }

        #endregion

        #region Constructors

        public MarketplaceContext(DbContextOptions options) : base(options)
        {
        }

        #endregion

        #region Methods

        //// TODO: Change the location of the Database file and use migrations update database to generate the file.
        //protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlite(@"Data Source=D:\Dev\Ivan\Rosen\marketplace\Resources\marketplace.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(
                builder =>
                {
                    builder.ToTable("User");

                    builder.HasKey(t => t.Id);
                });

            modelBuilder.Entity<Category>(
                builder =>
                {
                    builder.ToTable("Category");

                    builder.HasKey(t => t.Id);
                });

            modelBuilder.Entity<Offer>(
                builder =>
                {
                    builder.ToTable("Offer");

                    builder.HasKey(t => t.Id);

                    builder.Property(t => t.CategoryId).IsRequired();

                    builder.Property(t => t.Description).IsRequired();

                    builder.Property(t => t.Location).IsRequired().HasMaxLength(100);

                    builder.Property(t => t.PictureUrl).IsRequired().HasMaxLength(100);

                    builder.Property(t => t.Title).IsRequired().HasMaxLength(100);

                    builder.Property(t => t.UserId).IsRequired();
                });
        }

        #endregion
    }
}