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
 let dialogsData = [
     {id: 1, name: 'Evgeny'},
     {id: 2, name: 'Katerina'},
     {id: 3, name: 'Andrey'},
     {id: 4, name: 'Oleg'},
     {id: 5, name: 'Anastasia'},
     {id: 6, name: 'Vlad'},
 ]
let messagesData = [
    {id: 1, message: 'yo'},
    {id: 2, message: 'hello'},
    {id: 3, message: 'qq'},
    {id: 4, message: 'Wtf?'},
    {id: 5, message: 'good'},
    {id: 6, message: 'world'},
]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>

    )
}
export default Dialogs;