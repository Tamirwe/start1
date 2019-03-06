import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

import Aux from '../../hoc/Aux';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            widthValue: this.props.width,
            heightValue: this.props.height,
            colorValue: this.props.color,
            speedValue: this.props.speed,

            displayColorPicker: false,
            colorRGB: this.props.colorRGB,
        }
    }


    componentWillReceiveProps(newProps) {
        this.setState({ widthValue: newProps.width });
        this.setState({ heightValue: newProps.height });
        this.setState({ colorValue: newProps.color });
        this.setState({ colorRGB: newProps.colorRGB });
        this.setState({ speedValue: newProps.speed });

    }

    widthChangedHandler = (event, controlName) => {
        this.setState({ widthValue: event.target.value });
    }

    heightChangedHandler(event) {
        this.setState({ heightValue: event.target.value });
    }

    colorChangedHandler(event) {
        this.setState({ colorValue: event.target.value });
    }

    speedChangedHandler(event) {
        this.setState({ speedValue: event.target.value });

    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSetUserDetails(this.state.widthValue, this.state.heightValue, this.state.colorValue, this.state.colorRGB, this.state.speedValue);
    }


    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ colorRGB: color.rgb });
        this.setState({ colorValue: color.hex })

    };


    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${this.state.colorRGB.r}, ${this.state.colorRGB.g}, ${this.state.colorRGB.b}, ${this.state.colorRGB.a})`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <Aux>
                <form onSubmit={this.submitHandler}>
                    <h2>Welcome New User</h2>
                    <div>
                        <span>
                            Width:
                        </span>
                        <span>
                            <input type="text"
                                value={this.state.widthValue}
                                onChange={(event) => this.widthChangedHandler(event)} />
                        </span>
                    </div>
                    <div>
                        <span>
                            Height:
                        </span>
                        <span>
                            <input type="text"
                                value={this.state.heightValue}
                                onChange={(event) => this.heightChangedHandler(event)} />
                        </span>
                    </div>

                    <div>
                        <div style={styles.swatch} onClick={this.handleClick}>
                            <div style={styles.color} />
                        </div>
                        {this.state.displayColorPicker ? <div style={styles.popover}>
                            <div style={styles.cover} onClick={this.handleClose} />
                            <SketchPicker color={this.state.colorRGB} onChange={this.handleChange} />
                        </div> : null}

                    </div>

                    <div>
                        <span>
                            Speed:
                        </span>
                        <span>
                            <input type="number"
                                value={this.state.speedValue}
                                onChange={(event) => this.speedChangedHandler(event)} />
                        </span>
                    </div>
                    <button>Submit</button>

                </form>
            </Aux>
        )
    }

}

const mapStateToProps = state => {
    return {
        width: state.settings.width,
        height: state.settings.height,
        color: state.settings.color,
        colorRGB: state.settings.colorRGB,
        speed: state.settings.speed,

    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSetUserDetails: (width, height, color, colorRGB, speed) => dispatch(actions.setSettings(width, height, color, colorRGB, speed)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
