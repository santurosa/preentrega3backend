import MessageDTO from "../dao/DTOs/message.js";

export default class MessageRepository {
    constructor(dao) {
        this.dao = dao
    }
    getMessages = async () => {
        const messages = await this.dao.getMessages();
        return messages;
    }
    ddMessage = async (user, message) => {
        const newMessage = new MessageDTO({ user, message })
        console.log(newMessage.user)
        const result = await this.dao.addMessage(newMessage.user, newMessage.message);
        return result;
    }
}