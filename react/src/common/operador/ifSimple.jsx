import React from "react";

export default props => {
    if (props.se) {
        return props.children
    } else {
        return false
    }
}
