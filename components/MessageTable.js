import React from "react";
import MessageTableRow from "./MessageTableRow";
import Table from 'react-bootstrap/Table';

const  MessageTable = () => {
        const messages = [];
        messages[0] = {"id": 0, "name": "Avril Lavigne", "message": "He was a skaterboi...."};
        messages[1] = {"id": 1, "name": "Betty White", "message": "Animals > Humans"};
        messages[2] = {"id": 2, "name": "Rick Sanchez", "message": "Wubba Lubba Dub Dub!!"};
        messages[3] = {"id": 3, "name": "The_Real_Meatloaf (RIP)", "message": "Who am I, why am I here? Forget the question, someone give me another beer."};
        messages[4] = {"id": 4, "name": "Hank Hill", "message": "Goddamnit Bobby...."};
        messages[5] = {"id": 5, "name": "Nicolas Cage in Ghost Rider: Spirit Of Vengeance ", "message": "I'm a good actor I promise plz don't judge me on this preformance alone"};



        //const { Table } = ReactBootstrap;
        return (

            <div className="m-3 p-4-dark ">
                <Table className="bg-light border border-secondary">
                    <tr >
                        <th className=" p-3 border border-secondary">#:</th>
                        <th className="p-3 border border-secondary">Name</th>
                        <th className="p-3 border border-secondary">Message</th>
                    </tr>
                    {messages.map(message =>
                        <MessageTableRow id={message.id} {...message} key={message.id}/>
                    )}

                </Table>
            </div>

        );
    };


export default MessageTable;