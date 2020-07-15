import React from "react";

const Value = (props) => {
    if (isNaN(+props.value) == true) {
        return (
            <h1>The Word is: {props.value}</h1>
        )
    }
    else {
        return (
            <h1>The Number is: {props.value}</h1>
        )
    }
}

export default Value;