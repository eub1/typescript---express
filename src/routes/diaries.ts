
import express from 'express'
import * as diaryServices from '../services/diaryServices'
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

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body
  const newDiaryEntry = diaryServices.addEntry({ date, weather, visibility, comment })
  res.json(newDiaryEntry)
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id) // + unary operator, to convert string to number. lo que viene por req.params siempre es str
  // res.send(diary?.weather)
  return diary !== undefined
    ? res.send(diary)
    : res.sendStatus(404)
})
export default router
