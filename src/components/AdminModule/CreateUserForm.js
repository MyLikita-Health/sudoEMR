import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import { _fetchData, _postData } from '../helpers.js';

export default class CreateUserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            name: '',
            username: '',
            password: '',
            role: '',
            speciality: '',
            records: 0,
            doctors: 0,
            pharmacy: 0,
            admin: 0,
            msg: '',
        }
    }

    componentDidMount(){
        this.fetchUsers();
    }

    fetchUsers = () => {
        const cb = (data) => this.setState({ users: data })
        _fetchData({ route: 'users/usersList', callback: cb })
    }

    logChange = (e) => {
        this.setState({[e.target.name]: e.target.value});  
    }

    onRecordsCheckBoxChange = () => {
        this.setState((prevState) => { return { records: prevState.records === 0 ? 1 : 0 } });
    }

    onDoctorsCheckBoxChange = () => {
        this.setState((prevState) => { return { doctors: prevState.doctors === 0 ? 1 : 0 } });
    }

    onpharmacyCheckBoxChange = () => {
        this.setState((prevState) => { return { pharmacy: prevState.pharmacy === 0 ? 1 : 0 } });
    }

    onAdminCheckBoxChange = () => {
        this.setState((prevState) => { return { admin: prevState.admin === 0 ? 1 : 0 } });
    }

    onRoleChange = (e) => {
        this.setState({ role: e.target.value })
    }

    onSpecialityChange = (e) => {
        this.setState({ speciality: e.target.value })
    }

    submit = (data) => {
        // postData({ route: 'users/new', data });

        fetch('http://localhost:4000/users/new', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)}).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data === "success"){
                this.setState({msg: "Thanks for registering"}); 
            }
        }).catch(function(err) {
            return err;
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const username = this.state.username;
        const users = this.state.users;
        
        for(let user of users){
            if(user.username === username){
                return this.setState({ msg: 'Username taken! please choose another username' });
            } else {
                const data = {
                    name: this.state.name,
                    username,
                    password: this.state.password,
                    role: this.state.role,
                    speciality: this.state.speciality,
                    records: this.state.records,
                    doctors: this.state.doctors,
                    pharmacy: this.state.pharmacy,
                    admin: this.state.admin
                }
                this.submit(data)
                this.setState({
                    name: '',
                    username: '',
                    password: '',
                    role: '',
                    speciality: '',
                    records: 0,
                    doctors: 0,
                    pharmacy: 0,
                    admin: 0,
                    msg: '',
                });
            }
        }
        
    }


  render() {
      const formStyle={
          width: '40%',
          marginLeft: 20
      }
    return (
      <div>
          
        <form style={formStyle}>
            <Card>
                <CardHeader>
                    <h4>Create a new User</h4>
                </CardHeader>
                <CardBody>
                    <div>
                        <label>Full Name:</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.logChange} name='name'/>
                    </div>
                    <div>
                        <label>Username:</label>
                        <input type="text" className="form-control" value={this.state.username} onChange={this.logChange} name='username'/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.logChange} name='password' />
                    </div>
                    <div>
                        <label>Role:</label>
                        <select className="form-control" value={this.state.role} onChange={this.onRoleChange} name="role">
                            <option value="">Select</option>
                            <option value="doctor">Doctor</option>
                            <option value="nurse">Nurse</option>
                            <option value="phamarcist">Phamarcist</option>
                            <option value="accountant">Accountant</option>
                        </select>
                    </div>
                    <div>
                        <label>Speciality</label>
                        <select className="form-control" value={this.state.speciality} onChange={this.onSpecialityChange} name="speciality">
                            <option value="">Select</option>
                            <option value="ent">ENT</option>
                            <option value="gynea">Gynea</option>
                            <option value="emergency">Emergency</option>
                            <option value="recordKeeping">Record Keeping</option>
                            <option value="accounting">Accounting</option>
                        </select>
                    </div>
                    <div> 
                        <label>Modules Visible to the User:</label>
                        <div className='checkboxes-stack'>
                            <div><input type="checkbox" name="records" value={this.state.records} name='records' onChange={this.onRecordsCheckBoxChange} /> Records Module</div>
                            <div><input type="checkbox" name="doctors" value={this.state.doctors} name='doctors' onChange={this.onDoctorsCheckBoxChange} /> Doctors Module</div>
                            <div><input type="checkbox" name="pharmacy" value={this.state.pharmacy} name='pharmacy' onChange={this.onpharmacyCheckBoxChange} /> Pharmacy Module</div>
                            <div><input type="checkbox" name="admin" value={this.state.admin} name='admin' onChange={this.onAdminCheckBoxChange} /> Admin Module</div>
                        </div>
                    </div>
                    <span style={{color:'red'}}>{this.state.msg}</span>
                    <input type="submit" onClick={this.handleSubmit} value="Sumit" className="btn btn-outline-secondary"/>
                </CardBody>
            </Card>
        </form>
        
      </div>
    )
  }
}
