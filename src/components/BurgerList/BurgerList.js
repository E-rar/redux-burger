import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {useSelector ,useDispatch} from 'react-redux';
import BurgerItem from './BurgerItem';
import CompareFix from '../Compare/CompareFix';
import {add} from '../../actions';


const BurgerList = () => {

    const [newData, setNewData] = useState(null);
    const compareArray = useSelector(state => state.counter);
    const dispatch = useDispatch();

    console.log(compareArray);
    
    let list = []

    useEffect(() => {
        fetch('https://my-burger-api.herokuapp.com/burgers')
            .then(response => response.json())
            .then(data => setNewData(data));

    }, []

    )


    const listItems = () => {
        if (newData !== []) {
            newData?.map((element, index) => {
                list.push(
                    <BurgerItem
                        data={element}
                        key={index}
                        func={dispatch(add(element))}
                    />)
            })
        }
    }

    listItems()
  

    return (
        <>
            <ListGroup variant="flush">
                {list}

            </ListGroup>
            <CompareFix />
        </>
    );
}

export default BurgerList;