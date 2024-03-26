import mongoose from "mongoose";

const chatModel = mongoose.Schema({
    chatName: {type: String, trim: true },
    isGroupChat: {type: Boolean, default: true },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }],
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
       timestamps: true 
}
);

const Chat = mongoose.model("Chat", chatModel);

export default Chat;