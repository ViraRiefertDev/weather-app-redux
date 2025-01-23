export interface WeatherInfoProps{
  id:string,
  temp:number|undefined,
  city:string|undefined,
  icon:string|undefined,
  isHistory?:boolean,
}