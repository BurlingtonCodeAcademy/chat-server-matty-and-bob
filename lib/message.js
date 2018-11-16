module.exports = class Message {
  constructor(name, body, time) {
    this.name = name || "anonymous";
    this.body = body;
    this.time = time
  }
}