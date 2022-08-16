/*
    *** Mediator/Middleware Pattern ***
        => Use a central mediator object to handle communication
         between components.
        => It makes possibile for components to interact with each
         other through a central point.
        => In JavaScript, the mediator is often nothing more than 
        object literal or a function.
        => Instead of directly talking to each other, the mediator 
        receives the request, and sends them forward where it needs.

    *** Advantages ***
        => The middleware pattern makes it easy for us to simplify many-to-many relationships
         between objects,by letting all communication flow through one central point.
*/

// create a ChatRoom class which work as a middleware 
class ChatRoom{
    logMessage(user, message){
        const time = new Date();
        const sender = user.getName();
        console.log(`${time} ${sender}: ${message}`)
    }
}

// create a user class which work as a user
class User{
    constructor(name, chatRoom){
        this.name = name;
        this.chatRoom = chatRoom;
    }

    getName(){
        return this.name
    }

    send(message){
        this.chatRoom.logMessage(this, message)
    }
}

// create a chatroom instance
const chatRoom = new ChatRoom();

// create a new user that is conttected to the chat room
const user1 = new User("Abc", chatRoom);
// each user instance has a send method which we can use in order to send message.
console.log(user1.send("Biya"));