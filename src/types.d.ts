export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy' 
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

// usar type si ya sabes que es mas bien fijo. No se pueden repetir los type, se estarian sobre-escribiendo.
//Ej. volver a definir type Visibility = ...etc
// si se pueden tener las interfaces mas de una vez, y se irian a;adiendo
// interface: esta pensada para ser extendida, concatena lo que extiendo

export interface DiaryEntry {
  id: number,
  date: string,
  weather: Weather,
  visibility: Visibility,
  comment: string
}

// SpecialDiaryEntry tiene todo lo que tiene DiaryEntry + flightNumber

interface SpecialDiaryEntry extends DiaryEntry {
  flightNumber: number
}
