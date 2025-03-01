import React from "react";

const Event = (props) => {

    const handleClick = () => {
        window.open(props.link, "_blank");
    }
    return(


        <td className="Event" style = {{backgroundColor: props.color, cursor: "pointer"}} onClick = {handleClick}>
            <h5>{props.event}</h5>
            <h6>{props.location}</h6>
            
        </td>
    )
}

export default Event;