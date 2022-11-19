
import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'
// para que permita esto a;ade tsconfig.json --> resolveJsonModule: true  --> line 100

// asercion de tipos: obligarle a typescript a que una constante trabaje de una forma
// as Array<DiaryEntry>  -> trata diaryData como un array de estos tipos

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

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

export const addEntry = (): undefined => undefined
