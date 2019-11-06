import React from "react";
import { Table } from "reactstrap";

class DailyIncome extends React.Component {
  constructor(props) {
    super();
    
    this.state = {

    }
}
   
    
  render(){
      return(
            <div>
                <h3 align="center">Daily Income and Expenses </h3>
                   <Table>
                      <thead>
                          <tr>
                              <th>S/N</th>
                              <th>PARTICULAR</th>
                              <th>BANK</th>
                              <th>INCOME</th>
                              <th>EXPENSE</th>
                              <th>REMARK</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1</td>
                              <td>driving lisence</td>
                              <td>access bank</td>
                              <td>100k</td>
                              <td>30k</td>
                              <td>good</td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td>I.D</td>
                              <td>GT bank</td>
                              <td>1000k</td>
                              <td>50k</td>
                              <td>good</td>
                          </tr>
                          <tr>
                              <td>3</td>
                              <td>house</td>
                              <td>first bank</td>
                              <td>200k</td>
                              <td>40k</td>
                              <td>good</td>
                          </tr>
                          <tr>
                              <td>4</td>
                              <td>school ID</td>
                              <td>fidelity bank</td>
                              <td>600k</td>
                              <td>20k</td>
                              <td>hmmm</td>
                          </tr>
                          <tr>
                              <td>5</td>
                              <td>uniform</td>
                              <td>jaiz bank</td>
                              <td>1800k</td>
                              <td>80k</td>
                              <td>good</td>
                          </tr>
                          <tr>
                              <td>6</td>
                              <td>hahahaha</td>
                              <td>my bank</td>
                              <td>10000k</td>
                              <td>3000k</td>
                              <td>excellent</td>
                          </tr>
                      </tbody>
                   </Table>

            </div>
      )
  }
  
   };

   export default DailyIncome;
  


  


  
