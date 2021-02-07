module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    studentNumber: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    courseNumber: {
      type: Sequelize.STRING
    },
    courseName: {
      type: Sequelize.STRING
    },
    grade: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};
