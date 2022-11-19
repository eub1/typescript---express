import express from 'express';
import diaryRouter from './routes/diaries';

const app = express()
app.use(express.json())

const PORT=3001

app.get('/ping', (_req, res) => { //_ para que typescript ignore que req, no esta siendo utilizado
  console.log('someone pinged here!!');
  res.send('pong')
});

app.use('/api/diaries', diaryRouter)

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
  
})