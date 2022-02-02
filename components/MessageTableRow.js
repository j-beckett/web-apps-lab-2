import React from "react";



const  MessageTableRow = ({id, name, message}) => {

        return (
             <tr className={(id % 2)? 'bg-light' : 'bg-dark text-white' }>
                <td className=" m-5 p-4  border border-secondary">{id +1}</td>
                <td className="m-5 p-2  border border-secondary">{name}</td>
                <td className="m-5 p-2  border border-secondary">{message}</td>
            </tr>

        );
    };

export default MessageTableRow;