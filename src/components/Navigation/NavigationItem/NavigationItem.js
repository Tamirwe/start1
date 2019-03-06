
import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './NavigationItem.module.css';

const NavigationItem = (props) => (
    <li className={css.listItem}>
        <NavLink
            to={props.link}
            exact={props.exact}>{props.children}</NavLink>
    </li>
);

export default NavigationItem;