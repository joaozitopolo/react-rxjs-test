import React from 'react'
import { removeByIndex } from '../containers/ItemsContainer';

export default function Item({item, index}) {

    let handleDeleteClick = () => {
        removeByIndex(index)
    }

    return <li className="actions">
        {item}
        <button className="delete" onClick={handleDeleteClick}></button>
    </li>
}
