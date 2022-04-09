using Microsoft.EntityFrameworkCore;
using UserBooks.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
IConfiguration Configuration = new ConfigurationBuilder()
                            .AddJsonFile("appsettings.json")
                            .Build();

// MSSQL server
//builder.Services.AddDbContext<AppDbContext>(options =>
//   options.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"]));
builder.Services.AddDbContext<AppDbContext>(x => x.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"]));


builder.Services.AddControllers()
    .AddNewtonsoftJson(options =>
                     options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore); ;
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Allow anything 
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CORS",
        policy =>
        {
            policy.AllowAnyOrigin()
            .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseCors("CORS");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
