import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={"dialogs/1"}>Evgeny</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"dialogs/2"}>Boyko</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"dialogs/3"}>Derry dog</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"dialogs/4"}>Yoppi cat</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"dialogs/5"}>Colli egg</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"dialogs/6"}>Grisha lopata</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"dialogs/7"}>Sebek bebek</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>hi</div>
                <div className={s.dialog}>hi hi</div>
                <div className={s.dialog}>how? your learnings react?</div>
            </div>
        </div>

    )
}
export default Dialogs;