import React, { useState } from 'react';
import FormReferTransfer from './FormReferTransfer';
// import { useHistory } from 'react-router';
import { Card, CardHeader, CardFooter, Button, Row, Col } from 'reactstrap';
import BackButton from '../../comp/components/BackButton';

const ReferTransferPatient = () => {
  const [name, setName] = useState('');
  const [toDoctor, setToDoctor] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    const obj = {
      name: name,
      toDoctor: toDoctor,
      note: note,
      mode: 'transfer',
    };
    console.log(obj);
  };
  // const history = useHistory();

  return (
    <div className="offset-md-2 col-md-8 col-lg-8 card p-0">
      <Row className="mt-4">
        <Col md="2" />

        <Col md="8">
          <BackButton />
          <Card className="shadow">
            <CardHeader tag="h4">Transfer Patient</CardHeader>
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
                <Button className="pl-5 pr-5" onClick={handleSubmit}>
                  Send
                </Button>
              </center>
            </CardFooter>
          </Card>
        </Col>
        <Col md="2" />
      </Row>
    </div>
  );
};

export default ReferTransferPatient;
