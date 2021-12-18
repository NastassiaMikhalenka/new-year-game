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

type initialItemType = {
    id: number
    img: string
}

function App() {
    const initialState: Array<initialItemType> = [
        {id: 1, img: pic1},
        {id: 2, img: pic2},
        {id: 1, img: pic3},
        {id: 2, img: pic4},
        {id: 1, img: pic5},
        {id: 2, img: pic6},
        {id: 2, img: pic7},
        {id: 2, img: pic8},
    ]
    const doubleArray = [...initialState, ...initialState];

    const [cards, setCards] = useState<Array<initialItemType>>([]);

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

    return (
        <>
            <div className={"picContainer"}>
                {cards.map(m => {
                        return (
                            <div>
                                <img
                                    onClick={() => {}}
                                    src={m.img} alt={"#"}/>
                            </div>
                        )
                    }
                )}
            </div>
        </>
    );
}

export default App;
