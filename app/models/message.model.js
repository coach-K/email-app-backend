module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define("messages", {
      subject: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.TEXT
      },
      isRead: {
        type: DataTypes.BOOLEAN
      }
    });
  
    return Message;
  };