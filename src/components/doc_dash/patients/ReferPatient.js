import React, { useState } from 'react';
import FormReferTransfer from './FormReferTransfer';
import DoctorInfo from './DoctorInfo';
import BackButton from '../../comp/components/BackButton';
import { Card, CardHeader, CardFooter, Button, Row, Col } from 'reactstrap';
// import { useHistory } from 'react-router';

const ReferPatient = () => {
  const [name, setName] = useState('');
  const [toDoctor, setToDoctor] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    const obj = {
      name: name,
      toDoctor: toDoctor,
      note: note,
      mode: 'refer',
    };
    console.log(obj);
  };
  // const history = useHistory();

  return (
    <Row>
      <Col xs="8">
        <div>
          <BackButton />
          <Card className="shadow">
            <CardHeader tag="h4">Refer Patient</CardHeader>
            <FormReferTransfer
              name={name}
              setName={setName}
              toDoctor={toDoctor}
              setToDoctor={setToDoctor}
              note={note}
              setNote={setNote}
            />
            <CardFooter>
              <center>
                {' '}
                <Button className="pl-5 pr-5" onClick={handleSubmit}>
                  Send
                </Button>
              </center>
            </CardFooter>
          </Card>
        </div>
      </Col>
      <Col xs="4">
        <DoctorInfo />
      </Col>
    </Row>
  );
};
export default ReferPatient;
