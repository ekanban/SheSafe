import React from 'react';

export default class CustomComponent extends React.Component {
    state = {
        error: false
    }
    componentWillMount = () => {
      
        // fetch () => {
            // if error
            // this.props.triggerNextStep({value: "done", trigger: "102"})
            // this.setState({error: true})
            // else

            window.location.replace("https://www.google.com");
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
