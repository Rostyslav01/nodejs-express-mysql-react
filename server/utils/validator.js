const Tutorial = db.tutorials;

export const validate = (data) => {
    data.map((el, idx) => {
        const tutorial = {
            studentNumber: el.studentnumber,
            firstName: el.firstname,
            lastName: el.lastname,
            courseNumber: el.coursenumber,
            courseName: el.coursename,
            grade: el.grade,
        }
        console.log(123456123, tutorial, idx)

        Tutorial.create(tutorial)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error accured while creating the Tutorial"
                })
            })
    })
    return response
}
