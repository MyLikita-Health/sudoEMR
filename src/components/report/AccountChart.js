import React, { Component } from 'react';
// import ChartTree from './ChartTree';
import {
  Card,
  CardBody,
  FormGroup,
  CardHeader,
  Form,
  Spinner,
  Button,
} from 'reactstrap';
// import { _postApi, _fetchApi, apiURL } from '../../redux/actions/api';
import { AiOutlinePlus } from 'react-icons/ai';
// import { toaster } from 'evergreen-ui';

class AccountChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: '',
      sub_head: '',
      description: '',
      loading: false,
      treeData: [],
      loadingTree: false,
    };
  }

  resetForm = () => {
    this.setState({
      head: '',
      sub_head: '',
      description: '',
    });
  };
  // componentDidMount() {
  //   this.fetchUsers();
  // }

  // fetchUsers = () => {
  //   _fetchApi(
  //     `${apiURL()}/account`,
  //     (data) => {
  //       this.setState({ treeData: data.results });
  //     },

  //     (err) => console.log(err)
  //   );
  // };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState({
  //     loading: true,
  //   });
  //   const { head, sub_head, description } = this.state;
  //   if ( sub_head === '') {
  //     toaster.warning('please complete the form')
  //     this.setState({
  //       loading: false,
  //     })
  //   }else{
  //     let data = {
  //       head: head,
  //       sub_head: sub_head,
  //       description: description,
  //     };
  //     e.preventDefault();
  //     const successCallback = (response) => {
  //       toaster.notify('successfully added');
  //       this.setState({
  //         head: '',
  //         sub_head: '',
  //         description: '',
  //         loading: false,
  //       });

  //       console.log(response);
  //       this.fetchUsers();
  //     };
  //     const errorCallback = (err) => {
  //       toaster.notify('error');
  //       this.setState({
  //         loading: false,
  //       });
  //       console.log(err);
  //     };
  //     const url = `${apiURL()}/account/create`;

  //     _postApi(url, data, successCallback, errorCallback);
  //   }
  // };

  render() {
    const {
      handleSubmit,
      handleChange,
      state: { head, sub_head, description },
    } = this;
    return (
      <Card>
        {/* {JSON.stringify(this.state.treeData)} */}
        <CardHeader>
          <h5>Chart of Account </h5>
        </CardHeader>
        <CardBody>
          <div className="row">
            <Form className="col-md-6 col-lg-6" onSubmit={handleSubmit}>
              <FormGroup>
                <label>Account Head</label>
                <input
                  type="text"
                  className="form-control"
                  name="head"
                  value={head}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>Account Sub Head</label>
                <input
                  type="text"
                  className="form-control"
                  name="sub_head"
                  value={sub_head}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                {/* {JSON.stringify(this.state.account)+"tyuhgfgh"} */}
                <label>Description</label>
                <input
                  type="textarea"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={handleChange}
                />
              </FormGroup>

              <center>
                <Button outline color="primary">
                  {this.state.loading === false ? (
                    <>
                      {' '}
                      <AiOutlinePlus />
                      <span>Save</span>
                    </>
                  ) : (
                    <>
                      <span>Saving</span>
                      <Spinner
                        style={{ width: '1rem', height: '1rem' }}
                        color="primary"
                      />
                    </>
                  )}
                </Button>
              </center>
            </Form>

            {/* <div className="col-md-6 col-lg-6">
             {this.state.treeData.length? 
             <ChartTree 
             />:"loading..."} */}
            {/* </div> */}
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default AccountChart;
