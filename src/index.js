import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs'

// 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.get('/download', (req, res, next) => {
  const filePath = path.join(__dirname, 'files/test.txt')
  res.download(filePath, 'test.txt', (err) => {
    if(err) {
      console.log('Error downloading file' + err)
    } else {
      console.log('File downloaded successfully.')
    }
  })
})

app.get('/write', (req, res, next) => {
  const filePath = path.join(__dirname, 'files/test.txt')
  fs.writeFileSync(filePath, 'Hello World', { encoding: 'utf-8' })
  res.status(200).json({
    message: 'OK'
  })
  
})

app.listen(8081, () => {
  console.log('SERVER RUNNING [8080] ...')
})