import React from "react";
import MessageTableRow from "./MessageTableRow";
import Table from 'react-bootstrap/Table';

const  MessageTable = ({messages}) => {
       
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