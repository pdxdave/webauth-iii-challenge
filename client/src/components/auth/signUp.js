import React, {Component} from 'react';
import axios from 'axios'

class Login extends Component {

   state = {
    username: '',
    password: '',
    department: ''
   }


handleChange = (e) => {
   this.setState({
       [e.target.id]: e.target.value
   })
}

handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = '/auth/register';

        axios.post(endpoint, this.state )
        .then(res => {
            console.log(res.data)
            localStorage.setItem('jwt', res.data.token);
            this.props.history.push('/login')

        })
        .catch( err => {
            console.log(err)
        })

        this.setState({
            username: '',
            password: '',
            department: ''
        })
    
}

    
    render(){
        return (
            <div>
                <h1>SignUp</h1>
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
                    <div>
                        <label htmlFor="department">Department</label>
                         <input type="text" id="department" onChange={this.handleChange} value={this.state.department}/>
                    </div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default Login;