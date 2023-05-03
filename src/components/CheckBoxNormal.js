import React, { useState, useEffect } from 'react'
import { FormGroup, Input, Label, Form } from 'reactstrap'

export default function CheckBoxNormal({
  label,
  name,
  handleCheck,
  value = [],
  className,
}) {
  const [checked, setChecked] = useState(
    value.indexOf(label) !== -1 ? true : false,
  )
  useEffect(() => setChecked(value.indexOf(label) !== -1 ? true : false), [
    value,
  ])
  return (
    <Form>
      <FormGroup>
        <Label check className={className}>
          <Input
            type="checkbox"
            style={{ width: '15px', height: '15px' }}
            checked={checked}
            onChange={({ target }) => {
              handleCheck(label)
              setChecked(target.checked)
            }}
          />{' '}
          {label}
        </Label>
      </FormGroup>
    </Form>
  )
}
