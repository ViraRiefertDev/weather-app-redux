export interface WeatherData{
  id:string,
  temp:number|undefined,
  city:string|undefined,
  icon: string|undefined;
}

export interface WeatherSliceState {
  data:{
    
    weatherData:WeatherData,
    historyWeatherData:WeatherData[]
  },
  error:any,
  status:"default"|"loading"|"success"|"error"
}