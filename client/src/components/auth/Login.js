import React, {Component} from 'react';
import axios from 'axios'

class Login extends Component {

   state = {
    username: '',
    password: '',
   }


handleChange = (e) => {
   this.setState({
       [e.target.id]: e.target.value
   })
}

handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = '/auth/login';

        axios.post(endpoint, this.state )
        .then(res => {
            console.log(res.data)
            localStorage.setItem('jwt', res.data.token);
            this.props.history.push('/users')

        })
        .catch( err => {
            console.log(err)
        }
    )
}

    
    render(){
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                         <label htmlFor="username">UserName</label>
                           <input type="text" id="username" onChange={this.handleChange} value={this.state.username}/>
                    </div>
                    <div>
                        <label htmlFor="password">Pasword</label>
                         <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/>
                    </div>
                    <div>
                        <button type="submit">Button</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default Login;