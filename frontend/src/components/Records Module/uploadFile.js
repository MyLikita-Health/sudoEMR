import React from 'react';
// import axios from 'axios';

class UploadFile extends React.Component {
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        this.setState({ 
            selectedFile: event.target.files[0]
         })
    }

    fileUploadHandler = () => {
        const data = new FormData();
        data.append('image', this.state.selectedFile, this.state.selectedFile.name);
        //the sql query goes here
        fetch('http://localhost:4000/patientrecords/upload', {
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
    render() {
        return (
            <div>
                <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler} >Upload</button>
            </div>
        )
    }
}

export default UploadFile;