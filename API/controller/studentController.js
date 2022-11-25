const studentModel = require("../model/studentModel")

const getStudent = async (req, res) => {
    try {
        const listStudent = await studentModel.find({})
        res.send({
            data: listStudent
        })
    } catch (error) {
        res.send({ error: error, status: "failure", message: "get student failure" })
    }
}

const addStudent = async (req, res) => {
    try {
        let data = req.body
        let limit = +(req.query.limit)
        const totalRecord = await studentModel.countDocuments({})
        const totalPage = Math.ceil(totalRecord / limit)
        const addStudent = await studentModel.create(data)
        res.send({ "student": addStudent, "total": totalPage })
    } catch (error) {
        res.send({ "error": error.message })
    }
}



const deleteStudent = async (req, res) => {
    try {
        let data = req.params.id
        const deleteStudent = await studentModel.findByIdAndDelete(data)
        res.send({ "student": deleteStudent })
    } catch (error) {
        res.send({ "error": error.message })
    }
}
const updateStudent = async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body
        const updateStudent = await studentModel.findByIdAndUpdate(id, data)
        res.send({ "student": updateStudent })
    } catch (error) {
        res.send({ "error": error.message })
    }
}

const searchStudent = async (req, res) => {
    try {
        let data = req.query.textSearch
        let activePage = +(req.query.activePage)
        let limit = +(req.query.limit)
        const totalRecord = await studentModel.countDocuments({ name: { $regex: data, $options: 'i' } })
        console.log(totalRecord, "11")
        const skip = (activePage - 1) * limit
        console.log(activePage, "activePage")
        const totalPage = Math.ceil(totalRecord / limit)
        console.log(totalPage, "123")
        const searchStudent = await studentModel.find({ name: { $regex: data, $options: 'i' } }).limit(limit).skip(skip)
        res.send({ "student": searchStudent, "totalPage": totalPage })
    } catch (error) {
        res.send({ "error": error.message })
    }
}

const Paginate = async (req, res) => {
    try {
        const activePage = +(req.query.activePage)
        let limit = +(req.query.limit)
        const totalRecord = await studentModel.countDocuments({})
        const skip = (activePage - 1) * limit
        const totalPage = Math.ceil(totalRecord / limit)
        const getPaginate = await studentModel.find({}).limit(limit).skip(skip)
        res.send({ "totalPage": totalPage, "listStudent": getPaginate })
    } catch (error) {
        res.send({ "error": error.message })
    }
}


module.exports = {
    getStudent,
    addStudent,
    Paginate,
    deleteStudent,
    updateStudent,
    searchStudent
}