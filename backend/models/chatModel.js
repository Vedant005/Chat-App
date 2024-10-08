const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGrouphChat: {
      type: Boolean,
      default: false,
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timpestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
