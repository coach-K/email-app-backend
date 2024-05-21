const db = require("../models");
const User = db.users;
const Message = db.messages;

  exports.findOverviewByUserId = async (userId) => {
    try {
      if (!userId) {
          return {status: 400, message: "userId cannot be blank"}
      }
      const user = await User.findByPk(userId);
      if (!user) {
        return {status: 400, message: "User not found"}
      }

    const allUserMessage = await Message.count({
        where: {userId: userId}
    });

    const allUnreadUserMessage = await Message.count({
        where: {userId: userId, isRead: false}
    });
    const data = {
        user: user,
        allMessage: allUserMessage,
        unreadMessage: allUnreadUserMessage
    }
      return {status: 200, message: "Message fetched successfully", data: data}
    } catch (error) {
      return {status: 500, message: error.message || "Some error occur while fetching message overview"}
    }
  };

  exports.findMessageByUserId = async (userId) => {
    try {
      if (!userId) {
          return {status: 400, message: "userId cannot be blank"}
      }

      const user = await User.findByPk(userId, {include: ["messages"]});

      return {status: 200, message: "Message successfully", data: user}
    } catch (error) {
      return {status: 500, message: error.message || "Some error occur while fetching messages"}
    }
  };

  exports.findMessageById = async (messageId) => {
    try {
      if (!messageId) {
          return {status: 400, message: "messageId cannot be blank"}
      }
      
      const message = await Message.findByPk(messageId, {include: ["user"]});

      return {status: 200, message: "Message successfully", data: message}
    } catch (error) {
      return {status: 500, message: error.message || "Some error occur while fetching message"}
    }
  };

  exports.updateMessageById = async (messageId) => {
    try {
      if (!messageId) {
          return {status: 400, message: "messageId cannot be blank"}
      }

      const message = await Message.findByPk(messageId);
      if (!message) {
        return {status: 400, message: "Message not found"}
      }
      
    const updatedMessage = await Message.update({isRead: true}, {
        where: {id: messageId}
    });

      return {status: 200, message: "Message updated successfully", data: updatedMessage}
    } catch (error) {
      return {status: 500, message: error.message || "Some error occur while updating message"}
    }
  };