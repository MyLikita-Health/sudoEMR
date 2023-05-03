import React, { useState } from 'react'
import { Card, Button, CardBody, CardHeader, Table, FormGroup, Label, Input } from 'reactstrap';
const ManageSurgeonAnesthetists = () => {
      const [acctTypes, setType] = useState('Surgeons')
      const [surgeonName, setsurgeonName] = useState('')
      const [anesthetistName, setanesthetistName] = useState('')
      const [addSurgeonName, setAddSurgeonName] = useState([])

      const handleReset = () => {
        setsurgeonName('')
        setanesthetistName('')
      }
      const handleBelong = (e) =>{
        setType(e.target.value)
       }
      const handleAdd = () => {
        setAddSurgeonName([...addSurgeonName, surgeonName])
        handleReset()
      }
      const handleDelete = (index) => {
        const newList = [...addSurgeonName];
        newList.splice(index, 1);
        setAddSurgeonName(newList);
      };
    return (
        <Card>
          <CardHeader className="d-flex justify-content-center">
        <FormGroup check className="mr-3">
          <Label check >
            <Input 
            type="radio" name="Surgeons" 
            checked={acctTypes === "Surgeons"}
            onChange={handleBelong}
            value="Surgeons"
            />
            Surgeons
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input 
            type="radio" name="Anesthetists" 
            checked={acctTypes === "Anesthetists"}
            onChange={handleBelong}
            value="Anesthetists"
            />
            Anesthetists
          </Label>
        </FormGroup>
            
            </CardHeader>
        <CardBody>
          <div className="row">
        <div className="col-md-6">
        {acctTypes === "Surgeons" ? 
        <FormGroup>
        <Label for="examplePassword">Add Surgeons</Label> 
        <Input type="name" name="Surgeons" value={surgeonName} 
            onChange ={e => setsurgeonName(e.target.value)} placeholder="Full name" />
       </FormGroup>: null}
       {acctTypes === "Anesthetists" ? 
       <FormGroup>
        <Label for="examplePassword">Add Anesthetists</Label> 
        <Input type="name" name="Anesthetists" value={anesthetistName} 
            onChange ={e => setanesthetistName(e.target.value)} placeholder="Full name" />
       </FormGroup>: null}
        </div>
        <div className="col-md-2 mt-4">
      <Button color="primary" className="" onClick={handleAdd}>Add</Button>
      </div>
          </div>
          <Table hover striped>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Full Name</th>
          <th>Action</th>
         </tr>
      </thead>
      <tbody>
       {addSurgeonName.map((item, index) => (
         <tr key={index}>
         <td>{index + 1}</td>
         <td>{item}</td>
         <td>
          <Button
            size="sm"
            color="danger"
            onClick={() => handleDelete(index)}>
            Delete
          </Button>
        </td>
       </tr>
       ))} 
      </tbody>
    </Table>
        </CardBody>
        
        
      </Card>
    )
}
export default ManageSurgeonAnesthetists