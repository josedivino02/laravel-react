import React from "react";

export default props => {
    if (props.se === props.data) {
        return props.children
    } else {
        return false
    }
}
