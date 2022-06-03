// <copyright company="ROSEN Swiss AG">
//  Copyright (c) ROSEN Swiss AG
//  This computer program includes confidential, proprietary
//  information and is a trade secret of ROSEN. All use,
//  disclosure, or reproduction is prohibited unless authorized in
//  writing by an officer of ROSEN. All Rights Reserved.
// </copyright>

using Marketplace.Core.Common;
using Marketplace.Dal;
using Microsoft.EntityFrameworkCore;

namespace Marketplace.Api
{
    using Marketplace.Bl;
    using Marketplace.Core.Bl;
    using Marketplace.Core.Dal;
    using Marketplace.Dal.Repositories;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.OpenApi.Models;

    public class Startup
    {
        #region Properties
        readonly string CorsAllowedOrigins = "AllowSpecificOrigins";
        public IConfiguration Configuration { get; }

        #endregion

        #region Constructors

        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        #endregion

        #region Methods

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Marketplace.Api v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(CorsAllowedOrigins);

            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

	        services.AddCors(options =>
		                         {
			                         options.AddPolicy(name: CorsAllowedOrigins,
			                                           builder =>
				                                           {
					                                           var origins = Configuration.GetValue<string>("CorsOrigins").Split(",");
					                                           builder.WithOrigins(origins)
					                                                  .AllowAnyHeader()
					                                                  .AllowAnyMethod();
				                                           });
		                         });

            services.AddControllers();
            services.AddSwaggerGen(c => { c.SwaggerDoc("v1", new OpenApiInfo { Title = "Marketplace.Api", Version = "v1" }); });


            services.AddDbContext<MarketplaceContext>(options =>
	                                                      options.UseSqlite(Configuration.GetConnectionString("EFCoreDatabase"),
	                                                                        b => b.MigrationsAssembly(typeof(MarketplaceContext).Assembly.FullName)));

            services.AddScoped<IMarketplaceContext>(provider => provider.GetService<MarketplaceContext>());
            services.AddScoped<IUserBl, UserBl>();
            services.AddScoped<ICategoryBl, CategoryBl>();
            services.AddScoped<IOfferBl, OfferBl>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<ICategoryRepository, CategoryRepository>();
            services.AddTransient<IOfferRepository, OfferRepository>();
        }

        #endregion
    }
}