export interface WeatherData {
  id: string
  temp: number | undefined
  city: string | undefined
  icon: string | undefined
}

export interface WeatherSliceState {
  data: {
    weatherData: WeatherData
    historyWeatherData: WeatherData[]
  }
  error: { code: string|undefined; message: string|undefined } 
  status: "default" | "loading" | "success" | "error"
}
