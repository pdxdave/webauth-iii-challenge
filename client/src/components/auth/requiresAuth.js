import React from 'react';
import axios from 'axios';

// new axios way of doing things
axios.defaults.baseURL = 'http://localhost:5005/';
axios.interceptors.request.use(options => {
    options.headers.authorization = localStorage.jwt;
    return options 
}, err => {
    return Promise.reject(err);
})

export default function(Component) {
    return class Authenticated extends React.Component {
        render(){
            const jwt = localStorage.jwt 
            const logMessage = <div>Please login to see the users</div>
            return (
                <>
                  {jwt ? <Component  {...this.props} /> : logMessage }
                </>
            )
        }
    }
}