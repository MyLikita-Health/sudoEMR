import React, {Component} from 'react'
import { Table } from 'reactstrap';
 
class  BreakDown extends Component{
    state={
        BreakDown:[]
    };

    handleDelete = remove=>{
        let fahad=this.state.BreakDown.filter(item=>item!==remove);
        this.setState({BreakDown:fahad});
    }
    render(){
        return(
            <div>
                    <Table responsive>
      <thead>
        <tr>
          <th>Date</th>
          <th>Cash</th>
          <th>Bank/POS </th>
          <th>Drugs_And_consumable</th>
          <th>Surg_Acc</th>
          <th>Physio</th>
          <th>Lab</th>
          <th>Building</th>
          <th>Energy</th>
          <th> Wages</th>
          <th>Gardening</th>
          <th>Cleaning</th>
          <th>Repair And Maintain</th>
          <th>Loan From Clinic</th>
          <th>Tax and Lexies</th>
          <th>Refund</th>
          <th>Refund</th>
          <th>Miscellanous</th>
          <th>PR</th>
          <th>Printing</th>
          <th>Subscription</th>
          <th>Loan to Prime</th>
          <th>Workshop</th>
          <th>Cash to Bank</th>
          <th>Insurance</th>
          <th>Transport</th>
          <th>Forex Buy</th>
          <th>Dollar</th>
          <th>Euro</th>
         
        </tr>
      </thead>
      <tbody>
            {this.state.BreakDown.map((index,item)=>()=>
               <tr key={index}>
                   <td>{item.Date}</td>
                   <td>{item.Cash}</td>
                   <td>{item.Bank_POS}</td>
                   <td>{item.Drugs_And_Comsumable}</td>
                   <td>{item.Surg_Acc}</td>
                   <td>{item.Physio}</td>
                   <td>{item.Lab}</td>
                   <td>{item.Building}</td>
                   <td>{item.Energy}</td>
                   <td>{item.Wages}</td>
                   <td>{item.Gardening}</td>
                   <td>{item.Cleaning}</td>
                   <td>{item.Repair_And_Maintain}</td>
                   <td>{item.Loan_From_Clinic}</td>
                   <td>{item.Tax_And_Leves}</td>
                   <td>{item.Refund}</td>
                   <td>{item.Miscellaneous}</td>
                   <td>{item.Printing}</td>
                   <td>{item.Subscription}</td>
                   <td>{item.Loan_To_Prime}</td>
                   <td>{item.Workshop}</td>
                   <td>{item.Cash_To_Banks}</td>
                   <td>{item.Insurance}</td>
                   <td>{item.Transport}</td>
                   <td>{item.Forex_Buy}</td>
                   <td>{item.Dollar}</td>
                   <td>{item.Euro}</td>
                  
               </tr> 
                )}
        
         
    </tbody>      
        
    </Table>
            </div>
        );
    }


}
export default BreakDown