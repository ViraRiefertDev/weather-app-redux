import axios, { AxiosError } from "axios"
import { createAppSlice } from "../../createAppSlice"
import type { WeatherSliceState } from "./types"
import { W } from "vitest/dist/reporters-yx5ZTtEV.js"

const API_KEY = "68d1ff1a7a5bc8351bf4a817fd203e1d"

const weatherInitialState: WeatherSliceState = {
  data: {
    weatherData: {
      temp: -1,
      city: "",
      icon: "",
    },
    historyWeatherData: [],
  },
  error: undefined,
  status: "default",
}

export const weatherSlice = createAppSlice({
  name: "WEATHER_SLICE",
  initialState: weatherInitialState,
  reducers: create => ({
    getWeatherData: create.asyncThunk(
      async (city: string, thunkApi) => {
        try {
          const result = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
          )
          return result.data
        } catch (error: unknown) {
          if(axios.isAxiosError(error)){
          return thunkApi.rejectWithValue(
            `${error.response?.data.cod}: ${error.response?.data.message}`,
          )}
          else{
            return('Unknown error')
          }
        }
      },
      {
        pending: (state: WeatherSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: WeatherSliceState, action: any) => {
          state.status = "success"
          state.data.weatherData = {
            temp: Math.round(action.payload.main.temp - 273.15),
            city: action.payload.name,
            icon: `http://openweathermap.org/img/w/${action.payload.weather[0].icon}.png`,
          }
        },
        rejected: (state: WeatherSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
    safeDataInHistory: create.reducer((state: WeatherSliceState) => {
      state.data.historyWeatherData = [
        ...state.data.historyWeatherData,
        state.data.weatherData,
      ]
    }),
  }),

  selectors: {
    weatherData: (state: WeatherSliceState) => state,
  },
})

export const weatherSliceActions = weatherSlice.actions
export const weatherSliceSelectors = weatherSlice.selectors
