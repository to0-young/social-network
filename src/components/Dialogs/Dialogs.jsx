import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"dialogs/1"}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Evgeny" id="1"/>
                <DialogItem name="Katerina" id="2"/>
                <DialogItem name="Andrey" id="3"/>
                <DialogItem name="Oleg" id="4"/>
                <DialogItem name="Anastasia" id="5"/>
                <DialogItem name="Vlad" id="6"/>
                <DialogItem name="Anna" id="7"/>
            </div>

            <div className={s.messages}>
                <Message message="Welcome"/>
                <Message message="how are you doing?"/>
                <Message message="Hello,world,I`m happy"/>
                <Message message="Mmmm nice "/>
                <Message message="go to home"/>
                <Message message="Brrr cold"/>
            </div>
        </div>

    )
}
export default Dialogs;