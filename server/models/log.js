module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('log', {
        descriptionOfWorkout: {
            type: DataTypes.STRING,
            allowNull: false
        },
        definitionOfWorkout: {
            type: DataTypes.STRING,
            allowNull: false
        },
        result: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ratingOfWorkout: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Log;
}