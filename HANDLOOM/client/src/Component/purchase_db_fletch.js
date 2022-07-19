import React from 'react';
import axios from 'axios';
export default class Allparchase extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:3001/parchase')
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
          <th>s_id</th>
          <th>bill_no</th>
          <th>bill_date</th>
          <th>prod_id</th>
          <th>bill_amount</th>
          <th>paid_amount</th>
      </tr>
      </thead>
      <tbody>
      {Array.isArray(data) && data.map(object => (
      <tr>
          <td>{object.s_id}</td>
          <td>{object.bill_no}</td>
          <td>{object.bill_date}</td>
          <td>{object.prod_id}</td>
          <td>{object.bill_amount}</td>
          <td>{object.paid_amount}</td>
          
      </tr>
      ))}
      </tbody>
      </table>
    </main>
  </div>
)};

}


