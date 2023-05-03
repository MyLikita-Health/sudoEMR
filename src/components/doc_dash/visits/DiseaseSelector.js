import React from 'react'
import AutoCompleteWithMultipleSelection from '../../comp/components/AutoCompleteWithMultipleSelection'

function DiseaseSelector({
  consultation = {},
  handleConsultationChange = (f) => f,
  sheetIsValid = true,
}) {
  return (
    <div>
      <AutoCompleteWithMultipleSelection
      labelClass='font-weight-bold'
        label="Disease Selector (ICD-10):"
        options={[
          'Maternal disomy chromosome 14',
          'Mauriac syndrome',
          '45,X/46,XY mixed gonadal dysgenesis',
          'Neurofibromatosis type 1',
          'Noonan syndrome',
          'Prader-Willi syndrome',
          'Rothmund-Thomson syndrome',
          'Silver-Russell syndrome',
          'Turner syndrome',
          'Velocardiofacial syndrome',
          'Werner syndrome',
          'Williams-Beuren syndrome',
          'Wolcott-Rallison syndrome',
          'Syndromes characterized by short stature and dysmorphisms',
        ]}
      />
      {/* <textarea
        value={consultation.treatmentPlan}
        onChange={({ target: { value } }) =>
          handleConsultationChange('treatmentPlan', value)
        }
        className="form-control"
        rows={5}
        disabled={!sheetIsValid}
      /> */}
    </div>
  )
}

export default DiseaseSelector
