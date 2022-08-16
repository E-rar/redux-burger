import React from 'react';
import {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const BurgerItem = ({ data, func }) => {
    

    return (
        <ListGroup.Item>
            <div className="row">
                <div className="col">
                    <h2>{data.name}</h2>
                    <h3>{data.restaurant}</h3>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <a href={data.web} className="secondary">
                                <Button variant="outline-primary">
                                    go to Homepage
                                </Button>
                            </a>
                        </div>
                        <div className="col">
                            <Button onClick={()=>func}>Vergleichen</Button>
                        </div>
                    </div>
                    <p>{data.description}</p>
                </div>
            </div>


        </ListGroup.Item>
    );
}

export default BurgerItem;