import React, { useEffect, useState } from "react";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
} from "reactstrap";
import SearchBar from "../record/SearchBar";
// import { _fetchApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import { _customNotify } from "../utils/helpers";
export default function ApproveAdmin() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getAdminRole = () => {
    fetch(`${apiURL()}/admin/manageadminrole`)
      .then((raw) => raw.json())
      .then((results) => setUsers(results.results))
      .catch((err) => console.log(err));
  };

  const handleActionSelectChange = async (user, value) => {
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
          _customNotify("User Approve successfully!");
          getAdminRole();
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
          _customNotify("User Suspend successfully!");
          getAdminRole();
        }
        // toggle(false);
        break;
      }
      default:
        return null;
    }
  };

  useEffect(() => {
    getAdminRole();
  }, []);

  return (
    <>
      <Card>
        <CardHeader className="text-center" tag="h6">
          Manage Admin
        </CardHeader>
        <CardBody>
          <SearchBar
            value={searchTerm}
            onChange={(e) => handleSearchTermChange(e)}
            placeholder="Search by name"
          />
          {/* {JSON.stringify(users)} */}
          <Table size="md" bordered hover striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length &&
                users.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {item.firstname} {item.lastname}
                    </td>
                    <td>{item.username} </td>
                    <td>{item.role}</td>
                    <td>{item.status}</td>
                    <td className="m-0">
                      <FormGroup>
                        <Input
                          type="select"
                          name="select"
                          onChange={(e) =>
                            handleActionSelectChange(item, e.target.value)
                          }
                        >
                          <option value="">Select Action</option>
                          <option value="approve">Approve</option>
                          <option value="suspend">Suspend</option>
                        </Input>
                      </FormGroup>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}
