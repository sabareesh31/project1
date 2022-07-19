import React from 'react';
import axios from 'axios';
export default class Allsupplier extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:3001/supplier')
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
      <th>s_id</th>
          <th>c_name</th>
          <th>c_addr</th>
          <th>c_phone</th>
          <th>c_Email</th>
          <th>p_name</th>
          </tr>
      </thead>
      <tbody>
      {Array.isArray(data) && data.map(object => (
      <tr>
          <td>{object.s_id}</td>
          <td>{object.c_name}</td>
          <td>{object.c_addr}</td>
          <td>{object.c_phone}</td>
          <td>{object.c_Email}</td>
          <td>{object.p_name}</td>
          </tr>
      ))}
      </tbody>
      </table>
    </main>
  </div>
)};

}


