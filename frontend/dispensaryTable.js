import React, { Component } from 'react';
import { Table } from 'reactstrap';


class DispensaryTable extends Component {
  state = {
     dispensary: [
       {
        PatientID : ' fjuyfmjc',
       },
       {
        Dossage : ' fjuyfmjc',
       },
       {
        Drugs: ' fjuyfmjc',
       },
     
     ]
  
  };

  handleDelete = remove => {
    let fahad = this.state.dispensary.filter(item => item !== remove);
    this.setState({ dispensary: fahad});
  }
  
  

  render() {
    return (
      <div>
        <center>
          <h5>Dispensary Table</h5>
        </center>

        <Table id="fahad">
          <thead>
            <tr>
              <th>PatientID</th>
              <th>Drugs</th>
              <th>Dossage</th>
              <th>Quantity</th>

            </tr>
          </thead>
          <tbody>
          
            {this.state.dispensary.map((item, index)=>(
              <tr key={index}>
                <td>{item.PatientID}</td>
                <td>{item.Drugs}</td>
                <td>{item.Dossage}</td>
                <td>{item.Quantity}</td>
                <td><button onClick={()=> this.handleDelete(item)}>
               DELETE
             </button></td>
              </tr>
            ))}
          
          </tbody>
      
        </Table>
      </div>
    );
  }
}
export default DispensaryTable;
