import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Aux from '../../hoc/Aux';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameValue: this.props.name,
            genderValue: this.props.gender,
            ageValue: this.props.age
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState({ nameValue: newProps.name });
        this.setState({ genderValue: newProps.gender });
        this.setState({ ageValue: newProps.age });

    }

    nameChangedHandler = (event, controlName) => {
        console.log(event.target.value);
        this.setState({ nameValue: event.target.value });
    }

    genderChangedHandler(event) {
        console.log(event.target.value);
        this.setState({ genderValue: event.target.value });
    }

    ageChangedHandler(event) {
        console.log(event.target.value);
        this.setState({ ageValue: event.target.value });

    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSetUserDetails(this.state.nameValue, this.state.genderValue, this.state.ageValue);
    }

    render() {
        return (
            <Aux>
                <form onSubmit={this.submitHandler}>
                    <h2>Welcome New User</h2>
                    <div>
                        <span>
                            name:
                        </span>
                        <span>
                            <input type="text"
                                value={this.state.nameValue}
                                onChange={(event) => this.nameChangedHandler(event)} />
                        </span>
                    </div>
                    <div>
                        <div>Gender</div>
                        <div>
                            <div >
                                <input type="radio" name="gender" value="male"
                                    checked={this.state.genderValue === "male"}
                                    onChange={(event) => this.genderChangedHandler(event)} /> Male
                            <input type="radio" name="gender" value="female"
                                    checked={this.state.genderValue === "female"}
                                    onChange={(event) => this.genderChangedHandler(event)} /> Female
                            <input type="radio" name="gender" value="other"
                                    checked={this.state.genderValue === "other"}
                                    onChange={(event) => this.genderChangedHandler(event)} /> Other
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Age</div>
                        <div>
                            <select value={this.state.ageValue} onChange={this.ageChangedHandler.bind(this)}>
                                <option value="1">0-20</option>
                                <option value="2">21-40</option>
                                <option value="3">41-60</option>
                                <option value="4">61 and above</option>
                            </select>
                        </div>
                    </div>
                    <button>Submit</button>

                </form>
            </Aux>
        )
    }

}

const mapStateToProps = state => {
    return {
        name: state.auth.name,
        gender: state.auth.gender,
        age: state.auth.age,

    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSetUserDetails: (name, gender, age) => dispatch(actions.setUserDetails(name, gender, age)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
