import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const SwitchButton = ({ name })  => {
  const [selected, setSelected] = useState('No');
	if(selected==='No'){
		localStorage.setItem(name,'No');
	}else if(selected==='Yes'){
		localStorage.setItem(name,'Yes');
	}else{
		localStorage.removeItem(name);
	}
  return (
		<ButtonGroup value={selected} style={{display:'block', margin:0, padding:0,}}>
			<Button color="success" style={{width:'300px !important'}}  onClick={() =>( setSelected('Yes') )} active={selected === 'Yes'}>Yes</Button>
			<Button color="success" style={{width:'300px !important'}} onClick={() =>( setSelected('No'))} active={selected === 'No'}>No</Button>
		</ButtonGroup>
  );
}

export default SwitchButton;
