
import React from 'react'
import { ReactDOM } from 'react'
const heading= React.createElement('h1',{id:'heading', alpha:'abc'}
,'namaste op'
)

console.log(heading)
const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)