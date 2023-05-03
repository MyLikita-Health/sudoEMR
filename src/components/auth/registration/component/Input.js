import React from 'react';

function Input({
  label = '',
  value = '',
  name = '',
  onChange = (f) => f,
  type = 'text',
  placeholder = '',
  required = false,
  loading = false,
  good = false,
  message = '',
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {loading && <span className="text-success">please wait...</span>}
      {message !== '' && (
        <span className={good ? 'text-success' : 'text-danger'}>{message}</span>
      )}
    </div>
  );
}

// export function ConfirmationInput({ label='', value='', name='', onChange=f=>f, type='text', placeholder='', required=false, loading }){
//     return (
//         <div className="form-group">
//             <label htmlFor={name}>{label} {required && <span className='text-danger'>*</span>}</label>
//             <input type={type} className="form-control" id={name} placeholder={placeholder} value={value} onChange={onChange}/>
//         </div>
//     )
// }

export default Input;
