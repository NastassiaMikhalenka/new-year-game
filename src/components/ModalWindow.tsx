import React from 'react';

type propsType = {
    onClickModal: () => void
    modalWindow: boolean
}

export const ModalWindow = ({onClickModal, modalWindow}: propsType) => {
    return (
        <div className={modalWindow ? "modal active" : "modal"}>
            <div className={"modalWindowContent"}>
                <button className={"btnModal"} onClick={onClickModal}>X</button>
                <p>Congratulations!</p>
                   <p> You are a winner!</p>
                <button className={"btnModalStart"} onClick={onClickModal}>Start over</button>
            </div>
        </div>
    )
}