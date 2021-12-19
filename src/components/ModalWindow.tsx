import React from 'react';

type propsType = {
    onClickRestart: () => void
}

export const ModalWindow = ({onClickRestart}: propsType) => {
    return (
        <div className={"modalWindowWrapper"}>
            <div className={"modal"}>
                <div className={"modalWindowContent"}>
                    <p>You are win!</p>
                    <button onClick={onClickRestart}>X</button>
                </div>
            </div>
        </div>
    )
}