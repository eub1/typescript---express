
import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'
// para que permita esto a;ade tsconfig.json --> resolveJsonModule: true  --> line 100

// asercion de tipos: obligarle a typescript a que una constante trabaje de una forma
// as Array<DiaryEntry>  -> trata diaryData como un array de estos tipos

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry !== undefined) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
    // return entry
  }
  return undefined
}

export const getEntrieswithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

//* v.1
// export const addEntry = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
//   const newDiaryEntry = {
//     id: Math.max(...diaries.map(d => d.id)) + 1, // busca el max id de los que existen en el array, y le agrega 1
//     date,
//     visibility,
//     weather,
//     comment
//   }

//   diaries.push(newDiaryEntry)
//   return newDiaryEntry
// }

export const addEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1, // busca el max id de los que existen en el array, y le agrega 1
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
