 <Modal isOpen={this.state.modalIsOpen} >
                    <ModalHeader >Edit Patient <button id="btn" onClick={this.closeModal} className="btn btnRight">x</button></ModalHeader>
                    <ModalBody>
                        <form  onSubmit={this.handleEdit} method="POST">
                            <FormGroup row>
                                <Col md={5}>
                                    <div>
                                        <figure className="Figimage"> Upload Passport Here...
                                            <input type="file" ref="passport" className="ImgFile" />
                                        </figure>
                                    </div> 

                                </Col>
                                
                                <Col md={6}>
                                    <Label>patient id</Label>
                                    <input   onChange={e =>this.setState({id:e.target.value})}     className="form-control" value={this.state.id} placeholder="id" />
                                </Col> 
                        
                            </FormGroup>

                            <FormGroup row>
                                <Col md={6}>
                                    <Label>Surname</Label>
                                    <input onChange={e =>this.setState({surname:e.target.value})} className="form-control" value={this.state.surname} placeholder="SurName"/>
                                </Col><br/>

                                <Col md={6}>
                                    <Label>First Name</Label>
                                    <input  onChange={e =>this.setState({firstname:e.target.value})} className="form-control" value={this.state.firstname} placeholder="FirstName" />
                                </Col><br/>

                                <Col md={5}>
                                    <label className="form-label" >Gender</label>
                                    <div className="">
                                        <input type="radio" onClick={this.setGender} checked={this.state.gender === 'male'} name="gender" value="male" />Male
                                        <input type="radio" onClick={this.setGender} checked={this.state.gender === "female"} name="gender" value="female" />Female
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <Label>Age</Label>
                                    <input type="number" ref="age" id="Age" onChange={e =>this.setState({age:e.target.value})} className="form-control" value={this.state.age} placeholder="Age"/>
                                </Col>

                                <Col md={4}>
                                    <Label>Marital Status</Label>
                                    <input  type="text" ref="maritalstatus" id="MaritalStatus"  onChange={e =>this.setState({maritalstatus:e.target.value})} className="form-control" value={this.state.maritalstatus}  placeholder="Marital Status" />
                                </Col>

                                <Col md={5}>
                                    <Label>Date Of Birth</Label>
                                    <input  type="date" ref="DOB" id="DOB" onChange={e =>this.setState({DOB:e.target.value})} className="form-control" value={this.state.DOB}  placeholder="Date Of Birth" />
                                </Col>

                                <Col md={3}>
                                    <Label>Tribe</Label>
                                    <input type="text" ref="tribe" id="Tribe" onChange={e =>this.setState({tribe:e.target.value})} className="form-control" value={this.state.tribe}  placeholder="Tribe"  />
                                </Col>

                                <Col md={4}>
                                    <Label>Religion</Label>
                                    <select className="form-control" onChange={this.logChange} ref="religion">
                                        <option value="islam ">Islam</option>
                                        <option value="christianity">Christianity</option>
                                        <option value="traditional">Traditional</option>
                                    </select>
                                    {/* <input  type="text" ref="religion" id="Religion" onChange={e =>this.setState({religion:e.target.value})} className="form-control" value={this.state.religion}  placeholder="Religion"  /> */}
                                </Col>

                                <Col md={6}>
                                    <Label>Phone Number</Label>
                                    <input  type="text" ref="phoneNo" id="PhoneNo" onChange={e =>this.setState({phoneNo:e.target.value})} className="form-control" value={this.state.phoneNo}  placeholder="Phone Number"  />
                                </Col>
                                
                                <Col md={6}>
                                    <Label>Email Address</Label>
                                    <input  type="text" ref="email" id="Email" onChange={e =>this.setState({email:e.target.value})} className="form-control" value={this.state.email}  placeholder="Email Address" />
                                </Col>

                                <Col md={5}>
                                    <Label>Nationality</Label>
                                    <input  onChange={e =>this.setState({nationality:e.target.value})} className="form-control" type="text"  ref="nationality" value={this.state.nationality}  placeholder="Nationality" />
                                </Col>

                                <Col md={3}>
                                    <Label>State</Label>
                                    <input type="text" ref="state" id="State" onChange={e =>this.setState({state:e.target.value})} className="form-control State" value={this.state.state}  placeholder="State" />
                                </Col> 
                                
                                <Col md={4}>
                                    <Label>LGA</Label>
                                    <input type="text" ref="lga" id="LGA" onChange={e =>this.setState({lga:e.target.value})} className="form-control lga" value={this.state.lga}  placeholder="LGA"/>
                                </Col> 

                                < Col md={5}>
                                    <Label>Occupation</Label>
                                    <input type="text" ref="occupation" id="Occupation" onChange={e =>this.setState({occupation:e.target.value})} className="form-control Occupation" value={this.state.occupation}  placeholder="Occupation" />
                                </Col> 
                                < Col md={1}></Col> 

                                <Col md={6}>
                                    <Label>Address</Label>
                                    <input type="textarea" ref="address" onChange={e =>this.setState({address:e.target.value})} className="form-control" value={this.state.address}  id="Address" />
                                </Col>

                                <Col md={12}>
                                    <legend>Next Of Kin Information</legend>             
                                </Col>
                                <Col md={6}>
                                    <Label>Name</Label>
                                    <input type="text" ref="kinName" onChange={e =>this.setState({kinName:e.target.value})} className="form-control" value={this.state.kinName}  placeholder="Kin Name" />
                                </Col>

                                <Col md={6}>
                                    <Label>RelationShip</Label>
                                    <input  type="text" ref="kinRelationship" onChange={e =>this.setState({kinRelationship:e.target.value})} className="form-control" value={this.state.kinRelationship}  placeholder="RelationShip" />
                                </Col>
                                
                                <Col md={5}>
                                    <Label>Phone Number</Label>
                                    <input type="text" ref="kinPhone" id="PhoneNo" onChange={e =>this.setState({kinPhone:e.target.value})} className="form-control" value={this.state.kinPhone}  placeholder="Kin Phone Number"  />
                                </Col>

                                <Col md={5}>
                                    <Label>Email Address</Label>
                                    <input type="text" ref="kinEmail" id="KinEmail" onChange={e =>this.setState({kinEmail:e.target.value})} className="form-control" value={this.state.kinEmail}  placeholder="Kin Email Address" />
                                </Col>

                                < Col md={5}>
                                    <Label>Occupation</Label>
                                    <input  type="text" ref="kinOccupation" id="KOccupation" onChange={e =>this.setState({kinOccupation:e.target.value})} className="form-control" value={this.state.kinOccupation}  placeholder="Occupation"  />
                                </Col> 

                                <Col md={6}>
                                    <Label>Address</Label>
                                    <input  type="textarea" ref="kinAddress" id="KAddress" onChange={e =>this.setState({kinAddress:e.target.value})} className="form-control" value={this.state.kinAddress}  />
                                </Col>
                            </FormGroup>
                            
                            <div className="" >
                                <button type="submit"  className="btn"  onClick={this.closeModal} color="danger" >Submit</button>
                                <button className="btn offset-md-9"  onClick={this.closeModal}>Cancel</button>
                            </div>                        
                        </form>
                    </ModalBody>
            </Modal>              