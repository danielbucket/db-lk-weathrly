const objectCleanerForecast = ((weatherData) => {
  const scrubbedData = weatherData.forecast.simpleforecast.forecastday.map((obj) => {
    return {
      weekday: obj.date.weekday,
      conciseCondition: obj.conditions,
      highTemp: obj.high.fahrenheit,
      lowTemp: obj.low.fahrenheit,
      conditionImg: obj.icon_url,
    };
  });
  return scrubbedData;
});

export default objectCleanerForecast;
