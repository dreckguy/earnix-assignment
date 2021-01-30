const express = require('express')
const app = express()
const port = 3000

const RESPONSE = 'I am a Response for Earnix Devops Team!'

app.get('/', (req, res) => res.send(RESPONSE))
app.listen(port, () => console.log(`docker exercise api is listening on port ${port}!`))