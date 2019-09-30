module.exports = function (sequelize, Sequelize) {
  const TodoSchema = sequelize.define("Todo", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING,
    priority: Sequelize.STRING,
  },
    {
      timestamps: false
    }
  )

  return TodoSchema;
}