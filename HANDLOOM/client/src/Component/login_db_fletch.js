import React from 'react';
import axios from 'axios';
export default class Alllogin extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:3001/login')
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
    <table className='table table-striped'>
      <thead>
      <tr>
      <th>emp_id</th>
          <th>username</th>
          <th>password</th>
          <th>role_id</th>
        </tr>
      </thead>
      <tbody>
      {Array.isArray(data) && data.map(object => (
      <tr>
          <td>{object.emp_id}</td>
          <td>{object.username}</td>
          <td>{object.password}</td>
          <td>{object.role_id}</td>
                  
      </tr>
      ))}
      </tbody>
      </table>
    </main>
  </div>
)};

}


