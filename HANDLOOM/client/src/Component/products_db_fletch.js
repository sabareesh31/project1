import React from 'react';
import axios from 'axios';
export default class Allproducts extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:3001/product')
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
      <th>prod_id</th>
          <th>prod_name</th>
          <th>s_id</th>
          <th>p_type</th>
          <th>price</th>
          <th>material</th>
          <th>catagories</th>
        </tr>
      </thead>
      <tbody>
      {Array.isArray(data) && data.map(object => (
      <tr>
          <td>{object.prod_id}</td>
          <td>{object.prod_name}</td>
          <td>{object.s_id}</td>
          <td>{object.p_type}</td>
          <td>{object.price}</td>
          <td>{object.material}</td>
          <td>{object.catagories}</td>
          
      </tr>
      ))}
      </tbody>
      </table>
    </main>
  </div>
)};

}


