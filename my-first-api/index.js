const express = require('express')

const app = express()
const port = 3006
const host = 'localhost'

app.get('/courses/aws', (req, res) => {
  res.send(
    {
        instructor: "Alejandro Llanganate",
        numberOfStudents: 50,
        teacherAssistant: "Anahi Vasquez",
        myName: "Glender Miranda",
    }
  )
})


app.listen(port, () => {
  console.log(`My app is listening at http://${host}:${port}`)
})
