import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'

const Navigation = () => {
    return (
        <div>
            <Navbar color = "dark">
                <NavbarBrand href = "/">Bohubrihi Restaurant</NavbarBrand>
            </Navbar>
        </div>
    );
}
export default Navigation;