const express = require("express") // khởi tạo express
const app = express() // lưu trữ express vào app để sử dụng
const port = 3001

const bodyParser = require('body-parser')
const moogoose = require("mongoose")
const cors = require("cors")


app.use(bodyParser.json()) //định nghĩa kiểu dữ liệu cho req.body
app.use(cors())


moogoose.connect('mongodb://localhost:27017')
    .then(() => console.log("connected !!!!"))
    .catch((error) => console.log(error, "error not connected"))



const routes = require('../node js/API/router/studentRoute')
routes(app)

app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
})
