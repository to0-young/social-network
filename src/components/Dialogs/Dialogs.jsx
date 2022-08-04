import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

let messages = [
    {id: 1, message: 'yo'},
    {id: 2, message: 'hello'},
    {id: 3, message: 'qq'},
    {id: 4, message: 'Wtf?'},
    {id: 5, message: 'good'},
    {id: 6, message: 'world'},
]

let dialogs = [
    {id: 1, name: 'Evgeny'},
    {id: 2, name: 'Katerina'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Oleg'},
    {id: 5, name: 'Anastasia'},
    {id: 6, name: 'Vlad'},
]
let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>,);
let messagesElements = messages.map(m => <Message message={m.message}/>);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;