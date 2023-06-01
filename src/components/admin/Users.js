import React, { Component, useState } from "react";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  Button,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import SearchBar from "../record/SearchBar";
import { _fetchApi, _deleteApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import { _customNotify } from "../utils/helpers";
import { MdRateReview, MdDelete } from "react-icons/md";
import { useHistory } from "react-router-dom";
import Loading from "../comp/components/Loading";
// import { useParams } from "react-router-dom";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      users: [],
      loading: false,
    };
  }

  fetchData() {
    this.setState({ loading: true });
    _fetchApi(
      `${apiURL()}/users`,
      (data) => {
        this.setState({ loading: false });
        // console.log(data);
        if (data.results.length) {
          this.setState({ users: data.results });
        }
      },
      (err) => {
        this.setState({ loading: false });
        console.log(err);
      }
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  handleSearchTermChange = (value) => {
    console.log(value);
    this.setState({ searchTerm: value });
  };

  handleActionSelectChange = async (user, value) => {
    switch (value) {
      case "approve": {
        // toggle(true);
        let userId = user.id;
        let response = await fetch(`${apiURL()}/users/approve/${userId}`, {
          method: "PUT",
          headers: { "Content-Type": "aplication/json" },
        });
        let data = await response.json();
        if (data) {
          console.log(data);
          _customNotify("Data updated!");
          this.fetchData();
        }
        // toggle(false);
        break;
      }
      case "suspend": {
        // toggle(true);
        let userId = user.id;
        let response = await fetch(`${apiURL()}/users/suspend/${userId}`, {
          method: "PUT",
          headers: { "Content-Type": "aplication/json" },
        });
        let data = await response.json();
        if (data) {
          console.log(data);
          _customNotify("Data updated!");
          this.fetchData();
        }
        // toggle(false);
        break;
      }
      default:
        return null;
    }
  };

  handleDelete = (id, facilityId) => {
    //  console.log(id, facilityId)
    _deleteApi(
      `${apiURL()}/users/delete/${id}/${facilityId}`,
      {},
      (data) => {
        // if(data.success){
        _customNotify("Deleted successfully");
        this.fetchData();
        // }
      },
      (err) => {
        console.log(err);
      }
    );
    // let newList = surgeonsList.filter((item, i) => item !== index);
    // setSurgeonsList(newList);
    // if (newList.length) {
    //   setSurgeonsList(newList);
    // }
  };

  render() {
    const { users, searchTerm } = this.state;

    const rows = [];
    if (users.length) {
      users.forEach((user) => {
        if (
          user.firstname.toLowerCase().indexOf(searchTerm.toLowerCase()) ===
            -1 &&
          user.lastname.toLowerCase().indexOf(searchTerm.toLowerCase()) ===
            -1 &&
          user.username.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1
        )
          return;

        rows.push(
          <TableRow
            user={user}
            firstname={user.firstname}
            lastname={user.lastname}
            username={user.username}
            role={user.role}
            id={user.id}
            facilityId={user.facilityId}
            handleActionSelectChange={this.handleActionSelectChange}
            handleDelete={this.handleDelete}
          />
        );
      });
    }

    return (
      <Card>
        <CardHeader className="text-center" tag="h6">
          List of All Users
        </CardHeader>
        <CardBody>
          {/* {JSON.stringify(users)} */}
          <SearchBar
            filterText={this.state.searchTerm}
            onFilterTextChange={this.handleSearchTermChange}
            placeholder="Search by name"
          />
          {/* {this.state.searchTerm} */}
          <div>
            {this.state.loading ? (
              <Loading />
            ) : (
              <span>Total Number of Users: {users.length}</span>
            )}
          </div>
          <Table size="sm" bordered hover striped>
            <thead>
              <tr>
                <th className="text-center">SN</th>
                <th className="text-center">Name</th>
                <th className="text-center">Username</th>
                <th className="text-center">Role</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
                <th />
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

const TableRow = ({
  user,
  firstname,
  lastname,
  username,
  role,
  handleActionSelectChange,
  handleDelete,
  id,
  facilityId,
  key,
}) => {
  const history = useHistory();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  // const match = useRouteMatch();
  // const ids = match.params.id;

  const handleClick = () => {
    history.push(`/me/admin/staffreview/${id}`);
  };
  return (
    <>
      {/* {JSON.stringify(ids)} */}
      <tr>
        <td>{id}</td>
        <td>
          {firstname} {lastname}
        </td>
        <td>{username}</td>
        <td>{role?role:'user'}</td>
        <td>{user.status}</td>
        <td>
          <FormGroup>
            <select
              className="mt-2 form-control"
              onChange={(e) => handleActionSelectChange(user, e.target.value)}
            >
              <option value="">Select Action</option>
              <option value="approve">Approve</option>
              <option value="suspend">Suspend</option>
            </select>
          </FormGroup>
        </td>
        <td>
          <Button
            color="success"
            size="sm"
            onClick={() => handleClick()}
            className="mr-1"
          >
            <MdRateReview
              size={20}
              fontWeight="bold"
              // style={{ marginRight: 10 }}
            />
            {/* Review */}
          </Button>
          <Button color="danger" size="sm" onClick={toggle}>
            <MdDelete size={20} fontWeight="bold" />
          </Button>
        </td>
      </tr>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
        <ModalBody>
          Confirm to delete <b>{firstname} {lastname} </b>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              handleDelete(id, facilityId);
              toggle();
            }}
          >
           <MdDelete size={20} fontWeight="bold" /> Delete Now
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

TableRow.defaultProps = {
  users: [],
};
