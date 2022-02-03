import React from "react";
import { useState } from 'react';
import MessageTable from "./MessageTable";
import NewMesssageForm from "./NewMessageForm";
////
const  MessageContainer = () => {

    const [messages, setMessages] = React.useState([
        {"id": 0, "name": "Avril Lavigne", "msgText": "He was a skaterboi...."},
        {"id": 1, "name": "Betty White", "msgText": "Animals > Humans"},
        {"id": 2, "name": "Rick Sanchez", "msgText": "Wubba Lubba Dub Dub!!"},
        {"id": 3, "name": "The_Real_Meatloaf (RIP)", "msgText": "Who am I, why am I here? Forget the question, someone give me another beer."},
        {"id": 4, "name": "Hank Hill", "msgText": "Goddamnit Bobby...."},
        {"id": 5, "name": "Nicolas Cage in Ghost Rider: Spirit Of Vengeance ", "msgText": "I'm a good actor I promise plz don't judge me on this preformance alone"}
    ]);

  //  console.log(messages);
    // function called by Formik to pass data from the Form
    const addNewMessage = (values) => {
        console.log(values);
        values.id = messages.length;
        
        setMessages( [values, ...messages] );
    }

    return(
        <>
            <NewMesssageForm addNewMessage={addNewMessage} />
            <MessageTable messages={messages}/>
        </>
        )
}


export default MessageContainer;