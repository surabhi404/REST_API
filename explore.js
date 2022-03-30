const Twilio=require("twilio");
const client=new Twilio("ACa77c2a594c29764ee94dc03a2207c4b8","ae189be979f218be49e01cf82075c6a3");
client.messages.list().then(messages => console.log(`The most recent message is ${message[0].body}`)).catch(err=> console.error(err));
console.log('gathering your message');