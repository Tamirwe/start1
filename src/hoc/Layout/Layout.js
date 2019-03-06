import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux';
import css from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
    }

    render() {
        return (
            <Aux>
                <section>
                    <SideDrawer className={css.sideDrower}></SideDrawer>
                    <article>
                        {this.props.children}
                    </article>
                </section>
            </Aux >
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}


export default connect(mapStateToProps, null)(Layout);
