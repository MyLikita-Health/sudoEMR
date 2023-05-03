import rules from 'validator'

const validator = ({ lab_no, token }) => {
  const errors = {}
  if (!rules.isEmpty(lab_no)) {
    if (!rules.isAlphanumeric(lab_no)) {
      errors.lab_no = 'Invalid  number'
    } else if (!rules.isLength(lab_no, 4, 32)) {
      errors.lab_no = 'Check your lab number an try again'
  }
}

  if (!rules.isEmpty(token)) {
    if (!rules.isAlphanumeric(token)) {
      errors.token = 'Invalid lab token'
    } else if (!rules.isLength(token, 4, 32)) {
      errors.token = 'Incomplete token'
    }
  }
  return errors
}

export default validator
