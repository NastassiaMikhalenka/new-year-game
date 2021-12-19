import React, {useEffect, useState} from 'react';
import './App.css';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';
import pic4 from './assets/pic4.png';
import pic5 from './assets/pic5.png';
import pic6 from './assets/pic6.png';
import pic7 from './assets/pic7.png';
import pic8 from './assets/pic8.png';
import pic10 from './assets/pic10.png';
import pic11 from './assets/pic11.png';


import find from './assets/find.png';
import {ModalWindow} from "./components/ModalWindow";

type initialItemType = {
    id: number
    img: any
    index?: number
}

function App() {
    const initialState: Array<initialItemType> = [
        {id: 1, img: pic1},
        {id: 2, img: pic2},
        {id: 3, img: pic3},
        {id: 4, img: pic4},
        {id: 5, img: pic5},
        {id: 6, img: pic6},
        {id: 7, img: pic7},
        {id: 8, img: pic8},
        {id: 9, img: pic10},
        {id: 10, img: pic11},
    ]
    const doubleArray = [...initialState, ...initialState];

    const [cards, setCards] = useState<Array<initialItemType>>([]);
    const [openedCards, setOpenedCards] = useState<Array<number>>([])
    const [matched, setMatched] = useState<Array<number>>([])
    const [valueSelect, setValueSelect] = useState<string>("Hard")

    const shuffle = (array: any) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    useEffect(() => {
        return setCards(shuffle(doubleArray));
    }, []);

    const onClickHandler = (index: number) => {
        setOpenedCards([...openedCards, index])
    }

    useEffect(() => {
        if (openedCards.length > 2) {
            openedCards.splice(1, 2)
        }

        if (openedCards.length < 2)
            return
        const first = cards[openedCards[0]]
        const second = cards[openedCards[1]]

        if (second && first.id === second.id) {
            setMatched([...matched, first.id])
        }

        if (openedCards.length === 2 && first !== second) setTimeout(() => setOpenedCards([]), 1000)

    }, [openedCards])

    console.log(openedCards)
    console.log(matched)

    useEffect(() => {
        if (valueSelect === "Easy") {
            initialState.splice(1, 4)
            updateArray()
        }
        if (valueSelect === "Middle") {
            initialState.splice(1, 2)
            updateArray()
        }
        if (valueSelect === "Hard") {
            updateArray()
        }

    }, [valueSelect])

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValueSelect(e.currentTarget.value)
    }

    const classNameHard = valueSelect === "Hard" ? "cardsHard" : "cards";

    const updateArray = () => {
        const doubleArray = [...initialState, ...initialState];
        setCards(shuffle(doubleArray));
        setOpenedCards([])
        setMatched([])
    }

    const onClickRestart = () => {
        setOpenedCards([])
        setMatched([])
    }

    if (matched.length === 6 && valueSelect === "Easy") {
        return (
            <ModalWindow onClickRestart={onClickRestart}/>
        )
    }
    if (matched.length === 8 && valueSelect === "Middle") {
        return (
            <ModalWindow onClickRestart={onClickRestart}/>
        )
    }
    if (matched.length === 10 && valueSelect === "Hard") {
        return (
            <ModalWindow onClickRestart={onClickRestart}/>
        )
    }

    return (
        <div className={"appContainer"}>
            <select value={valueSelect}
                    onChange={onChange}>
                <option disabled={true}>Level</option>
                <option value={"Easy"} id={"1"}>Easy</option>
                <option value={"Middle"} id={"2"}>Middle</option>
                <option value={"Hard"} id={"3"} selected>Hard</option>
            </select>
            <div className={classNameHard}>
                {cards.map((m, index) => {
                    let isFlipped = false
                    if (openedCards.includes(index)) isFlipped = true
                    if (matched.includes(m.id)) isFlipped = true

                    return (
                        <div
                            onClick={() => onClickHandler(index)}
                            className={isFlipped ? "card" + " isFlipped" : "card"}
                        >
                            <div className={"inner"}>
                                <div className={"front"}>
                                    <img
                                        src={m.img} alt={"#"}/>
                                </div>
                                <div className={"back"}>
                                    <img src={find} alt={"#"}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button onClick={onClickRestart}>Restart</button>
        </div>
    );
}

export default App;
