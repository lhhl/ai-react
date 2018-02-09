import React, { Component } from 'react'; 
import './users.scss';

import data  from './data.json';
 
class Users extends Component { 
  
    render() { 
        return ( 
            <div> 
                { JSON.stringify(data) }
            </div> 
        ); 
    } 
} 
 
export default Users; 