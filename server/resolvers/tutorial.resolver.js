const db = require("../models");
const createNewTable = require("../models")
const Tutorial = db.tutorials;
const queryInterface = db.sequelize.getQueryInterface();
const schema = require("../utils/table-schema")

const fillNewTable = (tbName, data) => {
    console.log(111, db.tutorials)
    console.log(2222, db.newTable05807422173783403)
    return data.map(el => {
        // return zalypa.upsert(el)
        //     .then(res => console.log(res))
        // // return queryInterface.upsert(tbName, el)
        // //     .then((res) => {
        // //         console.log(123, res)
        // //         return res
        // //     })
    })
}

module.exports = (data) => {
    const tableName = `newTable${Math.random()}`.replace('.', '')
    let tableData = data.map((el, idx) => {
        return {
            studentNumber: el.studentnumber,
            firstName: el.firstname,
            lastName: el.lastname,
            courseNumber: el.coursenumber,
            courseName: el.coursename,
            grade: el.grade,
        }

        // console.log(111, tutorial)
    // Tutorial.create(tutorial)
    //     .then(data => {
    //         return data
    //     })
    //     .catch(err => {
    //         return {
    //             error: err.message || "Some error occurred while creating the Tutorial",
    //             data: null
    //         }
    //     })
    })

    // const {tableName} = createNewTable(tableName)
    //
    // let newTable = createNewTable(tableName)[tableName]
    //
    // return tableData.map(el => {
    //     return newTable.create(el)
    //         .then(data => {
    //             return data
    //         })
    //         .catch(err => {
    //             return {
    //                 error: err.message || "Some error occurred while creating the Tutorial",
    //                 data: null
    //             }
    //         })
    // })

    return queryInterface.createTable(tableName, schema())
        .then(() => {
            fillNewTable(tableName, tableData)
            // return {
            //     error: false,
            //     data: fillNewTable(tableName, tableData),
            // }
        })
}
