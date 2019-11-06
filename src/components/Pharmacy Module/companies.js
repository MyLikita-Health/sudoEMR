import React, {Component} from 'react'
import {Table,Button} from 'reactstrap'

class Companies extends Component{
    state={
        companies:[]
    }

    handleDelete=remove=>{
       let fahad=this.state.Companies.filter(item=>item!==remove);
       this.setState({Companies:fahad});
    };
    render(){
        return(
            <div>
                <center>Companies Table. </center>
                <Table responsive>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Admission</th>
                        <th>Drugs</th>
                        <th>Lab</th>
                        <th>ProMGT</th>
                        <th>Total</th>
                        <th>Customer</th>

                    </tr>
                </thead>
                <tbody>
                {this.state.companies.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.SN}</td>
                        <td>{item.Date}</td>
                        <td>{item.Admission}</td>
                        <td>{item.Drugs}</td>
                        <td>{item.Lab}</td>
                        <td>{item.ProMGD}</td>
                        <td>{item.Total}</td>
                        <td>{item.Customer}</td>
                        <td><Button onClick={()=>this.handleDelete(item)}></Button></td>
                    </tr>
                ))}
                </tbody>

                </Table>
            </div>
        )
    }
}
export default Companies;