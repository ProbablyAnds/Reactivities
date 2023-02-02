using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController] //controller attribute to show its used to server HTTP API responses
[Route("[controller]")] //-------routes - each controller has one - knows where to redirect the request to
// browse to this endpoint //localhost:5000/weatherforecast
//VVV class name minus Controller 
public class WeatherForecastController : ControllerBase //dirives from controllerbase classe
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    //dependency injection - making something available to our controller whihc isnt used 
    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")] //--------endpoints - whihc method it will use (get/post/put)
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray(); //returns array of weather forecasts
    }
}
