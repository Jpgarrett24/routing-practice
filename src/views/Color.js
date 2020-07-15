import React from "react";

const Color = (props) => {
    console.log(props);
    return (
        <h1 style={{ backgroundColor: props.background, color: props.color }} > The Word is: { props.word}</ h1 >
    )
}

export default Color;