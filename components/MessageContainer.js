import React from "react";
import MessageTable from "./MessageTable";
import NewMesssageForm from "./NewMessageForm";

const  MessageContainer = () => {
    const messages = [];
    messages[0] = {"id": 0, "name": "Avril Lavigne", "message": "He was a skaterboi...."};
    messages[1] = {"id": 1, "name": "Betty White", "message": "Animals > Humans"};
    messages[2] = {"id": 2, "name": "Rick Sanchez", "message": "Wubba Lubba Dub Dub!!"};
    messages[3] = {"id": 3, "name": "The_Real_Meatloaf (RIP)", "message": "Who am I, why am I here? Forget the question, someone give me another beer."};
    messages[4] = {"id": 4, "name": "Hank Hill", "message": "Goddamnit Bobby...."};
    messages[5] = {"id": 5, "name": "Nicolas Cage in Ghost Rider: Spirit Of Vengeance ", "message": "I'm a good actor I promise plz don't judge me on this preformance alone"};


    // function called by Formik to pass data from the Form
    const addNewMessage = (values) => {
        console.log(values);
        values.id = messages.length;
        messages.unshift(values);
        console.log(messages);
    }

    return(
        <>
            <NewMesssageForm addNewMessage={addNewMessage} />
            <MessageTable messages={messages}/>
        </>
        )
}


export default MessageContainer;