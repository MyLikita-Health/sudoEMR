import React, { useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useSelector, useDispatch } from 'react-redux';
import { getPatientList } from '../../doc_dash/actions/patientsActions';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

const SearchPatient = ({
  onChange = (f) => f,
  value = '',
  editable = true,
  required = false,
}) => {
  const dispatch = useDispatch();
  const getPatients = () => dispatch(getPatientList());

  useEffect(() => {
    getPatients();
  }, []);

  const patients = useSelector((state) => state.individualDoc.patients);

  return (
    <>
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText className="bg-primary text-light">
          <FaSearch size={26} />
        </InputGroupText>
      </InputGroupAddon>
      <Typeahead
        id="selectpatient"
        placeholder="Select patient..."
        align="justify"
        // bodyContainer='form-control form-control-lg'
        bsSize="lg"
        options={
          patients.length
            ? patients
            : [
                {
                  name: '',
                  patient_id: '',
                  id: '',
                },
              ]
        }
        // onInputChange={onChange}
        onChange={(item) => {
          if (item.length) {
            onChange(item[0]);
          }
        }}
        labelKey={(item) =>
          `${item.name}  (${
             item.id
          })`
        }
        emptyLabel=""
      />
    </InputGroup>
    </>
  );
};

export default SearchPatient;
