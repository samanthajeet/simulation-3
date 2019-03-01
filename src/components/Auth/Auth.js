import React, { Component }  from 'react';
import axios from 'axios';

class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput= (prop, val) => {
    this.setState({
      [prop] : val
    })
  }

  register = () => {
    const {username, password} = this.state
    axios.post('/auth/register', {username, password}).then(response => {
      this.props.history.push('/dashboard')
    })
  }

  login = () => {
    const {username, password} = this.state
    axios.post('/auth/login', {username, password}).then( response => {
      this.props.history.push('/dashboard')
    })
  }
  
  render() { 
    const {username, password} = this.state
    return ( 
      <div>
        <h1>Auth Component</h1>

        <input 
          value={username} 
          onChange={(e) => {this.handleInput('username', e.target.value)}} 
          placeholder="username"
          /> 

        <input 
          type="password" 
          value={password} 
          onChange={(e) => {this.handleInput('password', e.target.value)}}
          placeholder="password"
           /> 


        <button onClick={this.register} >Sign Up</button>
        <button onClick={this.login} >Login</button>
      </div>
     );
  }
}
 
export default Auth;