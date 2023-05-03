import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { FaEdit } from 'react-icons/fa'

function AutoCompleteWithMultipleSelection(props) {
  const { editable = true } = props
  return (
    <div className={props.containerClass}>
      {props.label === '' ? null : (
        <label className={props.labelClass}>
          {props.label}{' '}
          {props.required && <span className="text-danger">*</span>}
        </label>
      )}
      {editable ? (
        <Typeahead
          id={`x-${props.name}-${props.labelKey}`}
          clearButton
          labelKey={props.labelKey}
          name={props.name}
          value={props.value}
          multiple
          options={props.options}
          placeholder={props.placeholder}
          onChange={props.onChange}
          {...props}
        />
      ) : (
        <div className="form-control d-flex flex-row justify-content-between">
          {props.value}
          <span style={{ cursor: 'pointer' }} onClick={props.toggleEdit}>
            <FaEdit className="text-primary" size={20} />
          </span>
        </div>
      )}
    </div>
  )
}

export default AutoCompleteWithMultipleSelection
