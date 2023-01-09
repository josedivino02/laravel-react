import React from "react";
import Routes from '../routes/routes'
import Messages from '../common/msg/messages';
import '../common/template/dependencies'

export default props => 
(
    <div className="app">
        <Routes />
        <Messages />
    </div>
)