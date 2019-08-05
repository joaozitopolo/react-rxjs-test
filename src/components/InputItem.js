import React, { useState } from 'react';
import { addText } from '../containers/ItemsContainer';

export default function InputItem() {

    let [text, setText] = useState('')

    let handleAdd = () => {
        if (text) {
            addText(text)
            setText('')
        }
    }

    return (
        <div>
            <input type="text" value={text} onChange={({ target }) => setText(target.value)} />
            <button onClick={handleAdd}>add</button>
        </div>
    )
}