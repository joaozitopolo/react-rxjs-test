import React, { useEffect } from 'react'
import InputItem from '../components/InputItem';
import ListItems from '../components/ListItems';
import { BehaviorSubject } from 'rxjs';

export const Data = new BehaviorSubject({})

export default function ItemsContainer() {

    /** prepares initial mount data */
    useEffect(() => {Data.next({
        list: []
    })}, [])

    return (
        <>
            <InputItem />
            <ListItems />
        </>
    )
}

export function removeByIndex(index) {
    let list = [ ...Data.value.list ]
    list.splice(index, 1)
    Data.next({...Data.value, list})
}

export function addText(text) {
    Data.next({ ...Data.value, list: [ ...Data.value.list, text ]})
}
