import { DiaryEntry } from '../types';
import diaryData from './diaries.json';
// para que permita esto a;ade tsconfig.json --> resolveJsonModule: true  --> line 100

// asercion de tipos: obligarle a typescript a que una constante trabaje de una forma
// as Array<DiaryEntry>  -> trata diaryData como un array de estos tipos

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = () => diaries;

export const addEntry = () => null;