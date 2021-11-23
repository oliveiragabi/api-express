const express = require("express")
const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false}))
userRoute(app)

app.get('/', (req, res) => res.send("Olá mundo pelo Express"))
app.listen(port, () => console.log("api rodando na porta 3000"))