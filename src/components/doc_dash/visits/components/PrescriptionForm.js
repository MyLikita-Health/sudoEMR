import { Autocomplete } from 'evergreen-ui/commonjs/autocomplete'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Form, FormGroup } from 'reactstrap'
import { apiURL } from '../../../../redux/actions'
import { _fetchApi2 } from '../../../../redux/actions/api'
import AutoComplete from '../../../comp/components/AutoComplete'

function PrescriptionForm({
  form = {},
  handleChange = (f) => f,
  handleSubmit = (f) => f,
}) {
  const facilityId = useSelector((state) => state.auth.user.facilityId)
  const [drugFrequency, setDrugFrequency] = useState([])
  const [drugs, setDrugs] = useState([])

  const getDrugFreq = () => {
    _fetchApi2(
      `${apiURL()}/drugs/drugs_freq?facilityId=${facilityId}`,
      (data) => {
        if (data && data.results) {
          setDrugFrequency(data.results)
          //   setState({ drugFreq: data.results });
        }
      },
      (err) => {
        console.log(err)
      },
    )
  }

  const getDrugs = () => {
    _fetchApi2(
      `${apiURL()}/drugs/drugs/all`,
      (data) => setDrugs(data.results),
      (err) => console.log(err),
    )
  }

  useEffect(() => {
    getDrugs()
    getDrugFreq()
    //   return () => {
    //       cleanup
    //   }
  }, [])

  const dropdownItems = []
  for (let i = 0; i <= 10; i++) {
    dropdownItems.push(<option value={i}>{i}</option>)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <div className="col-md-4">
          <AutoComplete
            name="route"
            options={['IV', 'IM', 'Tabs', 'Susp', 'SC', 'Syr', 'Caps']}
            value={form.route}
            _ref={(ref) => (this._route = ref)}
            onChange={(item) => {
              if (item.length) {
                handleChange('route', item[0])
              }
            }}
            onInputChange={(text) => handleChange('route', text)}
            label="Route"
          />
        </div>
        <div className="col-md-4">
          <label>Select Drugs</label>
          <Autocomplete
            align="justify"
            id="drug"
            ref={(ref) => (this._drugs_typeahead = ref)}
            options={drugs}
            labelKey={(item) => `${item.name}`}
            onChange={(val) => {
              if (val.length) {
                handleChange('drug', val[0].name)
              }
            }}
            onInputChange={(text) => handleChange('drug', text)}
          />
        </div>

        <div className="col-md-4">
          <label>Dosage</label>
          <input
            type="text"
            name="dosage"
            value={form.dosage}
            className="form-control"
            onChange={({ target: { value } }) => handleChange('dosage', value)}
          />
        </div>
      </FormGroup>
      <FormGroup row>
        <div className="col-md-4">
          <Autocomplete
            name="route"
            options={drugFrequency}
            value={form.frequency}
            _ref={(ref) => (this.frequency = ref)}
            onChange={(item) => {
              if (item.length) {
                handleChange('frequency', item[0].description)
              }
            }}
            onInputChange={(text) => handleChange('frequency', text)}
            label="Frequency"
            labelClass="font-weight-normal"
            labelKey="description"
          />
        </div>
        <div className="col-md-4">
          <label>Duration</label>
          <select
            className="form-control"
            value={form.duration}
            onChange={({ target: { value } }) =>
              handleChange('duration', value)
            }
          >
            {dropdownItems}
          </select>
        </div>

        <div className="col-md-4">
          <label>Period</label>
          <select
            className="form-control"
            value={form.period}
            onChange={({ target: { value } }) => handleChange('period', value)}
          >
            {['-', 'days', 'weeks', 'months', 'years'].map((it, i) => (
              <option key={i}>{it}</option>
            ))}
          </select>
        </div>
      </FormGroup>
      <div />
      <button
        type="submit"
        className="btn btn-sm btn-outline-success offset-md-5"
        title="add medication"
      >
        Update Medication
      </button>
    </Form>
  )
}

export default PrescriptionForm
