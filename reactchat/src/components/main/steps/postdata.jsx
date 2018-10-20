import React from 'react';

export default class Custom extends React.Component {
    state = {
        name:this.props.steps.name.value,
        phone:this.props.steps.phone.value,
        email:this.props.steps.email.value,
        age:this.props.steps.age.value,
        state:this.props.steps.state.value,
    }
    componentWillMount = () => {
console.log(this.state);
const data=this.state;
console.log(JSON.stringify(this.state));

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
    'Accept': 'application/json'
  },
    body: data
  })
    .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(data);
      });

        // fetch () => {
            // if error
            // this.props.triggerNextStep({value: "done", trigger: "102"})
            // this.setState({error: true})
            // else


            setTimeout(() => {

            this.props.triggerNextStep({value: "done", trigger: "bye"})
            }, 1200)
        // }
    }
    render() {
        return(
            <p> ...</p>
        )
    }
}
