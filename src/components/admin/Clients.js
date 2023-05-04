import React, { useEffect, useState } from "react";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  //   Button,
  //   FormGroup,
} from "reactstrap";
import SearchBar from "../record/SearchBar";
import { _fetchApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import { FaPrint } from "react-icons/fa";
import PrintWrapper from "../comp/components/print/PrintWrapper";
import Loading from "../comp/components/Loading";
// import Loading from "../loading";
// import { MdDelete } from "react-icons/md";
// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    let condition = "Instant";
    let type = null;
    _fetchApi(
      `${apiURL()}/lab/patients/${condition}/${type}`,
      (data) => {
        setLoading(false);
        if (data.success) {
          setClients(data.results);
        }
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const handleSearchTermChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const printPatientList = () => {
    window.frames[
      "print_frame"
    ].document.body.innerHTML = document.getElementById(
      "print-patients-list"
    ).innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
  };

  const rows = [];
  if (clients.length) {
    clients.forEach((client, i) => {
      if (
        client.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1 ||
        client.phoneNo.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1
      )
        return;

      rows.push(<TableRow key={i} client={client} />);
    });
  }

  return (
    <Card>
      <CardHeader className="text-center" tag="h6">
        Patients List
      </CardHeader>
      <CardBody>
        <SearchBar
          placeholder="Search by patient..."
          filterText={searchTerm}
          onFilterTextChange={(d) => setSearchTerm(d)}
        />
        <div className="d-flex flex-direction-row justify-content-between mb-1">
          <>
            {loading ? (
              <Loading />
            ) : (
              <span>Total Number of Patients: {clients.length}</span>
            )}
          </>
          <button
            className="btn btn-sm btn-primary px-2"
            onClick={printPatientList}
          >
            <FaPrint className="mr-1" /> Print now
          </button>
        </div>
        <div id="print-patients-list">
          <PrintWrapper title="List of Patients">
            <Table size="sm" bordered hover striped>
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Gender</th>
                  <th className="text-center">Phone Number</th>
                  <th className="text-center">Email</th>
                  {/* <th className="text-center">Action</th> */}
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </PrintWrapper>
        </div>
        <iframe
          title="print-patients-list"
          name="print_frame"
          width="0"
          height="0"
          src="about:blank"
          // style={styles}
        />
      </CardBody>
    </Card>
  );
};

const TableRow = ({ client = {}, handleDelete, id, facilityId, key }) => {
  //   const history = useHistory();
  // const match = useRouteMatch();
  // const ids = match.params.id;

  //   const handleClick = () => {
  //     history.push(`/me/admin/staffreview/${id}`);
  //   };

  return (
    <>
      {/* {JSON.stringify(ids)}*/}
      <tr>
        <td>{client.id}</td>
        <td>{client.name}</td>
        <td>{client.gender}</td>
        <td>{client.phoneNo}</td>
        <td>{client.email}</td>
        {/* <td>{user.status}</td>
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
        </td> */}
        {/* <td>
          <Button
            color="danger"
            size="sm"
            onClick={() => handleDelete(id, facilityId)}
          >DELETE
            <MdDelete size={20} className='ml-2' fontWeight="bold" />
          </Button>
        </td> */}
      </tr>
    </>
  );
};

export default Clients;
