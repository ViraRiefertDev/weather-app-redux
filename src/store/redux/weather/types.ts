export interface WeatherData{
  temp:number,
  city:string,
  icon: string;
}

export interface WeatherSliceState {
  data:{
    weatherData:WeatherData,
    historyWeatherData:WeatherData[]
  },
  error:any,
  status:"default"|"loading"|"success"|"error"
}