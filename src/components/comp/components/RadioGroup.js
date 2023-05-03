import React from 'react'
import RadioBox from './Radiobox'

function RadioGroup(props) {
  const {
    container = '',
    options = [],
    onChange = (f) => f,
    value = '',
    label = '',
    name = '',
  } = props

  return (
    <div className={container}>
      <h6 className={'font-weight-bold'}>{label}</h6>

      <div className="d-flex flex-row align-items-center">
        {/* {JSON.stringify({name, value})} */}
        {options.map((_item, _i) => (
          <RadioBox
            key={_i}
            container="mx-4"
            label={_item.label}
            name={name}
            checked={_item.name === value}
            onChange={() => onChange(name, _item.name)}
          />
        ))}
      </div>
    </div>
  )
}

export default RadioGroup
