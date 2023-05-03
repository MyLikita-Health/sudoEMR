import React from 'react'
import { Table } from 'reactstrap'
import { checkStrEmpty } from '../../utils/util'

function CustomTable(props) {
  const {
    fields = [],
    data = [],
    rowStyles = (f) => f,
    rowClassName = (f) => f,
  } = props
  return (
    <Table {...props}>
      <thead>
        <tr>
          {fields.map((_item, _idx) => {
            let _className = _item.headerClassName ? _item.headerClassName : ''
            return (
              <th key={_idx} className={`text-center ${_className}`}>
                {_item.title}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(
            (item, idx) =>
              item && (
                <tr
                  key={idx}
                  className={rowClassName(item)}
                  style={rowStyles(item)}
                >
                  {fields.map((_item, _idx) => {
                    let val = item[_item.value] || ''
                    let value_alt =
                      (_item.value_alt && item[_item.value_alt]) || ''
                    let _className = _item.className ? _item.className : ''
                    if (_item.component) {
                      return (
                        <td className={_className} style={_item}>
                          {_item.component(item, idx)}
                        </td>
                      )
                    } else {
                      return (
                        <td
                          key={_idx}
                          className={_className}
                          style={_item.style}
                        >
                          {checkStrEmpty(val) ? value_alt : val || '-'}
                        </td>
                      )
                    }
                  })}
                </tr>
              ),
          )}
      </tbody>
    </Table>
  )
}

export default CustomTable
