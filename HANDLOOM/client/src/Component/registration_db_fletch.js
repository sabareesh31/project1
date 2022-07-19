import React from 'react';
import axios from 'axios';
export default class Allregistration extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:3001/user')
     .then(response => {
         if (response.status === 200 && response != null) {
           this.setState({
                data: response.data
           });
    } else {
      console.log('problem');
    }
})
.catch(error => {
   console.log(error);
});
}

render(){
  const { data } = this.state;
  return( <div>
 
    <main>
    <table className='table table-dark'>
      <thead>
      <tr>
      <th>user_id</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>Email_id</th>
          <th>password</th>
          <th>phone_no</th>
          <th>address</th>
          <th>state</th>
          <th>zip_code</th>
        </tr>
      </thead>
      <tbody>
      {Array.isArray(data) && data.map(object => (
      <tr>
          <td>{object.user_id}</td>
          <td>{object.first_name}</td>
          <td>{object.last_name}</td>
          <td>{object.Email_id}</td>
          <td>{object.password}</td>
          <td>{object.phone_no}</td>
          <td>{object.address}</td>
          <td>{object.state}</td>
          <td>{object.zip_code}</td>
      </tr>
      ))}
      </tbody>
      </table>
    </main>
  </div>
)};

}


