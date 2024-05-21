module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
      firstname: {
        type: DataTypes.STRING
      },
      lastname: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }
    });
  
    return User;
  };