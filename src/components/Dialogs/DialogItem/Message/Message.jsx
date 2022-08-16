import React from 'react';
import s from "./Message.module.css"
import {NavLink} from "react-router-dom";


const Message = (props) => {

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={`dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
}

export default Message;