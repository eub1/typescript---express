
import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntrieswithoutSensitiveInfo())
})

//* v.1
// router.post('/', (req, res) => {
//   const { date, weather, visibility, comment } = req.body
//   const newDiaryEntry = diaryServices.addEntry(date, weather, visibility, comment)
//   res.json(newDiaryEntry)
// })
//* v.2
// router.post('/', (req, res) => {
//   const { date, weather, visibility, comment } = req.body
//   const newDiaryEntry = diaryServices.addEntry({ date, weather, visibility, comment })
//   res.json(newDiaryEntry)
// })

//* v.3 con validaciones

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addEntry(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id) // + unary operator, to convert string to number. lo que viene por req.params siempre es str
  // res.send(diary?.weather)
  return diary !== undefined
    ? res.send(diary)
    : res.sendStatus(404)
})
export default router
