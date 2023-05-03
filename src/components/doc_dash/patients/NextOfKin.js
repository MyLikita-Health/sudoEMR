import React from "react";
import { Card, CardHeader, CardBody, Collapse, Button } from "reactstrap";
import InputGroup from "../../comp/components/InputGroup";
import { GrDown, GrUp } from "react-icons/gr";
import { connect } from "react-redux";
// import ButtonGroup from '../components/ButtonGroup';
import { closePatientForm, updatePatient } from "../actions/patientsActions";
// import { _customNotify } from '../../utils/helpers';
// import { FaPlus } from 'react-icons/fa';
// import AutoComplete from '../components/AutoComplete';
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

// class NextOfKinInformation extends React.PureComponent {
//   state = {
//     isOpen: true,
//     saving: false,
//     kinInfo: {
//       nextOfKinName: '',
//       nextOfKinRelationship: '',
//       nextOfKinPhone: '',
//       nextOfKinEmail: '',
//       nextOfKinAddress: '',
//     },
//     addRelatedPerson: false,
//     relatedPersonForm: {},
//   };

//   static getDerivedStateFromProps(nextProps, prevState) {
//     // console.log(prevState.kinInfo);
//     // console.log(prevState);
//     if (nextProps.patient) {
//       return { kinInfo: { ...nextProps.patient, ...prevState.kinInfo } };
//     } else return null;
//   }

//   // componentDidUpdate(nextProps) {
//   //   if (nextProps.patient) {
//   //     this.setState({ kinInfo: {...nextProps.patient, ...this.state.kinInfo} });
//   //   }
//   // }

//   onInputChange = ({ target: { name, value } }) => {
//     console.log(name, value);
//     this.setState((prev) => ({
//       kinInfo: { ...prev.kinInfo, [name]: value },
//     }));
//   };

//   toggle = () => this.setState((prev) => ({ isOpen: !prev.isOpen }));

//   saveNextOfKin = () => {
//     this.props.saveKinInfo(this.state.kinInfo, () => {
//       _customNotify('Next of kin information saved');
//     });
//   };

//   closeForm = () => {
//     this.props.closeForm();
//   };

//   openRelatedPerson = () =>
//     this.setState({ addRelatedPerson: true, isOpen: false });
//   closeRelatedPerson = () =>
//     this.setState({ addRelatedPerson: false, isOpen: true });

function NextOfKinInformation({
  mode = "EDITABLE",
  nextOfKinAddress,
  nextOfKinName,
  nextOfKinPhone,
  nextOfKinEmail,
  nextOfKinRelationship,
  onInputChange,
  copyPatientAddr = (f) => f,
}) {
  const [isOpen, setOpen] = useState(true);

  const toggle = () => setOpen(!isOpen);

  return (
    <Card className="mb-2">
      <CardHeader
        tag="div"
        className="d-flex flex-direction-row justify-content-between btn"
        onClick={toggle}
      >
        <span>Next of Kin Information</span>
        <span>{isOpen ? <GrDown /> : <GrUp />}</span>
      </CardHeader>

      <Collapse isOpen={isOpen}>
        <CardBody className="d-flex flex-direction-row flex-wrap">
          <InputGroup
            label="Full Name"
            name="nextOfKinName"
            value={nextOfKinName}
            onChange={onInputChange}
            // editable={mode === "EDITABLE"}
          />
          <InputGroup
            label="Relationship"
            name="nextOfKinRelationship"
            value={nextOfKinRelationship}
            onChange={onInputChange}
            // editable={mode === "EDITABLE"}
          />
          <InputGroup
            label="Phone Number"
            type="tel"
            name="nextOfKinPhone"
            value={nextOfKinPhone}
            onChange={onInputChange}
            // editable={mode === "EDITABLE"}
          />
          <InputGroup
            label="Email Address"
            name="nextOfKinEmail"
            value={nextOfKinEmail}
            onChange={onInputChange}
            // editable={mode === "EDITABLE"}
          />
          <InputGroup
            label="Address"
            name="nextOfKinAddress"
            value={nextOfKinAddress}
            onChange={onInputChange}
            // editable={mode === "EDITABLE"}
          />
          <div className='d-flex flex-direction-row align-items-center'>
            <Button onClick={copyPatientAddr}>
              <FaCopy className="mr-1" />
              Copy Patient Address
            </Button>
          </div>
        </CardBody>

        {/* {mode === 'EDITABLE' && (
          <ButtonGroup
            submitLabel="Save"
            submit={saveNextOfKin}
            submitting={saving}
            exit={closeForm}
          />
        )} */}
      </Collapse>

      {/* <div className="d-flex flex-direction-row justify-content-center">
        <button
          className="btn btn-outline-dark m-md-4 m-sm-2 m-xs-2"
          onClick={openRelatedPerson}
        >
          <FaPlus className="mr-2" size={20} />
          Add other related persons
        </button>
      </div>

      {addRelatedPerson && <AddRelatedPersons close={closeRelatedPerson} />} */}
    </Card>
  );
}

// function AddRelatedPersons({ close }) {
//   return (
//     <Card body className="m-3">
//       <AutoComplete
//         containerClass="col-md-6"
//         label="Related Persons"
//         required
//       />
//       <InputGroup container="col-md-6" label="Relationship Type" required />

//       <button className="btn btn-outline-primary">Submit</button>
//       {/* <ButtonGroup submitLabel="Save" exit={close} /> */}
//     </Card>
//   );
// }

const mapStateToProps = ({ individualDoc: { formMode } }) => ({
  mode: formMode,
});

const mapDispatchToProps = (dispatch) => ({
  closeForm: () => dispatch(closePatientForm()),
  saveKinInfo: (data, cb) => dispatch(updatePatient(data, cb)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextOfKinInformation);
