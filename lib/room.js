module.exports = class Room {
  constructor(id, messages) {
    this.id = id
    this.messages = messages
  }
  addMessage(newMessage){
    let currentMessages = this.messages;
    currentMessages.push(newMessage);
    this.messages = currentMessages
  }
}