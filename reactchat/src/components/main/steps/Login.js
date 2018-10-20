import React from 'react';

export default class CustomComponent extends React.Component {
    state = {
        error: false
    }
    componentWillMount = () => {
        const { login } = this.props.steps;
        console.log('login', login);
        // fetch () => {
            // if error
            // this.props.triggerNextStep({value: "done", trigger: "102"})
            // this.setState({error: true})
            // else
            setTimeout(() => {

            this.props.triggerNextStep({value: "done", trigger: "103"})
            }, 1200)
        // }
    }
    render() {
        return(
            <p> ...</p>
        )
    }
}
export class PinVerify extends React.Component {
    state = {
        error: false
    }
    componentWillMount = () => {
        const { login, otp } = this.props.steps;
        console.log('login', login);
        // fetch () => {
            // if error
            // this.props.triggerNextStep({value: "done", trigger: "105"})
            // this.setState({error: true})
            // else
            setTimeout(() => {

            this.props.triggerNextStep({value: "done", trigger: "106"})
            }, 1200)
        // }
    }
    render() {
        return(
            <p> ...</p>
        )
    }
}
export class PinVerifyNew extends React.Component {
    state = {
        error: false
    }
    componentWillMount = () => {
        const { otp } = this.props.steps;
        //console.log('login', login);
        // fetch () => {
            // if error
            // this.props.triggerNextStep({value: "done", trigger: "105"})
            // this.setState({error: true})
            // else
            setTimeout(() => {

            this.props.triggerNextStep({value: "done", trigger: "6"})
            }, 1200)
        // }
    }
    render() {
        return(
            <p> ...</p>
        )
    }
}