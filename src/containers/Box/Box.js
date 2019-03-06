import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

import Aux from '../../hoc/Aux';

class Box extends Component {
    constructor(props) {
        super(props)

        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
        this.isAnimate = true;
    }


    componentWillReceiveProps(newProps) {
        this.mount.removeChild(this.renderer.domElement);
        this.renderComponent(newProps.width, newProps.height, newProps.color);
    }

    componentDidMount() {
        const width = this.props.width
        const height = this.props.height
        const color = this.props.color
        this.renderComponent(width, height, color);

    }

    renderComponent(width, height, color) {

        // const width = width
        // const height = height

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.BoxGeometry(1, 1, 1)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.35
        controls.enableZoom = true

        //const geometry = new THREE.SphereGeometry(1, 7, 6)

        const material = new THREE.MeshBasicMaterial({ color: color, wireframe: true })
        const cube = new THREE.Mesh(geometry, material)

        camera.position.z = 5;
        scene.add(cube)
        renderer.setClearColor('#000000')
        renderer.setSize(width, height)

        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.material = material
        this.cube = cube

        this.mount.appendChild(this.renderer.domElement)
        this.start()
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop() {
        cancelAnimationFrame(this.frameId)
    }

    toggleStopStart() {

        this.isAnimate = !this.isAnimate
        this.animate()
    }
    animate() {
        if (this.isAnimate) {
            this.cube.rotation.x += this.props.speed / 100
            this.cube.rotation.y += this.props.speed / 100

            this.renderScene()
            this.frameId = window.requestAnimationFrame(this.animate)
        }
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }

    widthChangedHandler = (event, controlName) => {
        console.log(event.target.value);
        let canvas = this.mount.children[0].style.width = event.target.value + 'px';
        this.setState({ width: event.target.value });
    }

    submitHandler = (event) => {
        event.preventDefault();
        //this.props.onSetUserDetails(this.state.nameValue, this.state.genderValue, this.state.ageValue);
    }

    render() {
        return (
            <div>
                <div
                    style={{ width: this.props.width + 'px', height: this.props.height + 'px', backgroundColor: 'red' }}
                    ref={(mount) => { this.mount = mount }}
                    onClick={() => this.toggleStopStart()}
                />


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        width: state.settings.width,
        height: state.settings.height,
        color: state.settings.color,
        speed: state.settings.speed,
    };
}

export default connect(mapStateToProps, null)(Box);

