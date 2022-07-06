using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using dotnet_rpg.Data;
using dotnet_rpg.Services.CharacterService;
using dotnet_rpg.Services.CharacterSkillService;
using dotnet_rpg.Services.FightService;
using dotnet_rpg.Services.WeaponService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using server.Services.SkillService;

namespace dotnet_rpg
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddDbContext<DataContext>(options =>
      {
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
              sqlServerOptionsAction: sqlOptions =>
              {
                sqlOptions.EnableRetryOnFailure(
                      maxRetryCount: 6,
                      maxRetryDelay: TimeSpan.FromSeconds(10),
                      errorNumbersToAdd: null);
              });
      });

      services.AddControllers();
      services.AddAutoMapper(typeof(Startup));
      services.AddScoped<ICharacterService, CharacterService>();
      services.AddScoped<ISkillService, SkillService>();
      services.AddScoped<IAuthRepository, AuthRepository>();
      services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
      .AddJwtBearer(options =>
      {
        options.TokenValidationParameters = new TokenValidationParameters
        {
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII
                      .GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
          ValidateIssuer = false,
          ValidateAudience = false
        };
      });
      services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
      services.AddScoped<IWeaponService, WeaponService>();
      services.AddScoped<ICharacterSkillService, CharacterSkillService>();
      services.AddScoped<IFightService, FightService>();

      services.AddCors(o => o.AddPolicy("localhost", builder =>
      {
        builder.WithOrigins("http://localhost:3000", "https://localhost:3000"
                            , "http://localhost:3000/", "https://localhost:3000/")
              .AllowAnyMethod()
              .AllowAnyHeader();
      }));
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseRouting();

      // use CORS with the policy called localhost
      // which is defined in the ConfigureServices method
      app.UseCors("localhost");

      app.UseAuthentication();
      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }
  }
}