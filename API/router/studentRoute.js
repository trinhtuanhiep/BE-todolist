const studentController = require("../controller/studentController")

const studentRoute = (app) => {
    app.route('/students')
        .get(studentController.getStudent)
        .post(studentController.addStudent)
        app.route('/students/:id')
        .put(studentController.updateStudent)
    app.route('/student/paginate')
        .get(studentController.Paginate)
    app.route('/student/delete/:id')
        .delete(studentController.deleteStudent)
    app.route('/student/search')
    .get(studentController.searchStudent)
    
}

module.exports = studentRoute
