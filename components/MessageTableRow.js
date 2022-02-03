import React from "react";



const  MessageTableRow = ({id, name, msgText, msgNum}) => {

        return (
             <tr className={(id % 2)? 'bg-light' : 'bg-dark text-white' }>
                <td className=" m-5 p-4  border border-secondary">{msgNum}</td>
                <td className="m-5 p-2  border border-secondary">{name}</td>
                <td className="m-5 p-2  border border-secondary">{msgText}</td>
            </tr>

        );
    };

export default MessageTableRow;