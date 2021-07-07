import React, {Component} from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth'

class Users extends Component {

    state = {
        users: []
    }


    componentDidMount(){
        const endpoint = '/users'
        //const endpoint = 'http://localhost:5000/api/users';
        // const options = {
        //     headers: {
        //         Authorization: localStorage.jwt  // get token from local storage
        //     }
        // }
        // axios.get(endpoint, options)
        axios.get(endpoint)
        .then(res => {
            console.log(res)
            this.setState({
                users: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }


  render(){
      if(this.state.users.length === 0 ){
          return <div>Loading...</div>
      }
        return(
         <div>
            <ul>
                {this.state.users.map(u => (
                    <li key={u.id}>{u.username}<span>{u.department}</span></li>
                ))}
            </ul>
         </div>
        )
    }
}


export default requiresAuth(Users);