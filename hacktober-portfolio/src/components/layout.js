import * as React from 'react'
import './styles/global.css'

import Nav from './nav'
const Layout = ({
    children
}) => {

    return (
        <>
            <Nav></Nav>
            <main>
            { children }
            </main>
        </>
    )
}

export default Layout;