const express = require('express')
const app = express()
const mc = require('./messages_controller')

app.use(express.json())

const messageBaseUrl = '/api/messages'
app.post(messageBaseUrl, mc.create)
app.get(messageBaseUrl, mc.read)
app.put(`${messageBaseUrl}/:id`, mc.update)
app.delete(`${messageBaseUrl}/:id`, mc.delete)

const port = 3001;
app.listen(port, () => {
    console.log(`${port} is up and running`)
})