import React from 'react'
import Item from './Item';

export default function ListItems() {
    return (
        <div className="box">
            <h2 class="subtitle">Items</h2>
            <div className="content">
                <ul>
                    <Item />
                </ul>
            </div>
        </div>
    )
}