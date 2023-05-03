import { useState } from 'react'
import { view } from '../../../redux/actions/result-viewer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
const useForm = (validate) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [values, setValues] = useState({
    lab_no: '',
    token: '',
  })
  const errors = validate(values)
  const [hasError, setErrors] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setValues({ ...values, [name]: value })
    setErrors(Object.values(validate(values)).length > 0 ? true : false)
  }

  const handleSubmit = (e) => {
    setLoading(!hasError)
    e.preventDefault()
    if (!hasError) {
      dispatch(
        view(
          values,
          (done) => {
            console.log({ done })
            if (done.data.success) {
              setLoading(false)
            }
          },
          (error) => {
            console.log({ error })
            setLoading(false)
          },history
        ),
      )
    }
  }

  return { handleChange, handleSubmit, values, errors, hasError, loading }
}
export default useForm
