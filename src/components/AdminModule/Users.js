import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { _fetchData } from '../helpers';
import Likes from './Like';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      users: [],
    };
  }

  fetchData() {
    let self = this;

    let route = 'users/usersList';
    let success_callback = data => {
      // console.log(data);
      self.setState({ users: data });
    };
    _fetchData({ route, success_callback });
  }

  componentDidMount() {
    this.fetchData();
  }

  handleSearchTermChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { users, searchTerm } = this.state;

    const rows = [];

    users.forEach(user => {
      if (user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1)
        return;

      rows.push(
        <TableRow
          name={user.name}
          username={user.username}
          role={user.role}
          speciality={user.speciality}
        />
      );
    });
    return (
      <div>
        <Likes />
        <h2 className="text-center">List of All Users</h2>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={e => this.handleSearchTermChange(e)}
          className="form-control"
          placeholder="Search by name"
        />
        <br />
        <Table size="md" bordered hover striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Role</th>
              <th>Speciality</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    );
  }
}

const TableRow = ({ name, username, role, speciality }) => (
  <tr>
    <td>{name}</td>
    <td>{username}</td>
    <td>{role}</td>
    <td>{speciality}</td>
  </tr>
);
TableRow.defaultProps = {
  users: [],
};
