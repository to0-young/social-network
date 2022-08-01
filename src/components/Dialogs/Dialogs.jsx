import React from 'react';
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Evgeny
                </div>
                <div className={s.dialog}>
                    boyko
                </div>
                <div className={s.dialog}>
                    pes
                </div>
                <div className={s.dialog}>
                    sobaka
                </div>
                <div className={s.dialog}>
                    chort
                </div>
                <div className={s.dialog}>
                    sutulaya
                </div>
                <div className={s.dialog}>
                    zebra
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