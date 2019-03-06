import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import css from './SideDrawer.module.css';
import Aux from '../../../hoc/Aux';

const SideDrawer = (props) => {

    return (
        <Aux>
            <nav>
                <ul>
                    <NavigationItem link="/" exact>Welcome</NavigationItem>
                    <NavigationItem link="/box" exact>Box</NavigationItem>
                    <NavigationItem link="/settings" exact>Settings</NavigationItem>
                </ul>
            </nav>
        </Aux>
    );
};

export default SideDrawer;