import React from 'react'
import { Heroes } from '../heroes/Heroes'

export default function MarvelScreen() {
    return (
        <div>
            <h1>Marvel</h1>
            <hr/>
            <Heroes publisher='Marvel Comics'/>
        </div>
    )
}
