import React, { useEffect, useState } from 'react'
import Item from './Item';
import { Data } from '../containers/ItemsContainer';

export default function ListItems() {
    let [ list, setList ] = useState()

    /** get list from shared data */
    useEffect(() => Data.subscribe(({list}) => setList(list)).unsubscribe, [])

    return (
        <div className="box">
            <h2 className="subtitle">Items</h2>
            <div className="content">
                <ul>
                    {list && list.map((item, index) => <Item key={`${item}${index}`} item={item} index={index}/>)}
                    {list && !list.length && "No Items"}
                </ul>
            </div>
        </div>
    )
}