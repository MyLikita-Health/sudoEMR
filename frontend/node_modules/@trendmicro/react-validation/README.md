# react-validation [![build status](https://travis-ci.org/trendmicro-frontend/react-validation.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-validation) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-validation/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-validation?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-validation.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-validation/)

React Validation

Demo: https://trendmicro-frontend.github.io/react-validation

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-validation](https://github.com/trendmicro-frontend/react-validation):

    ```
    npm install --save react @trendmicro/react-validation
    ```

2. Install [react-validation](https://github.com/trendmicro-frontend/react-validation) with <b>@trendmicro</b> scope:

    ```js
    import {
        createForm, createFormControl,
        Form, Input, Select, Textarea
    } from '@trendmicro/react-validation';
    ```
 
Note: [Validator.js](https://github.com/chriso/validator.js) is a library for validating and sanitizing strings. It can save your time when writing validation functions. Check out a list of available validators at https://github.com/chriso/validator.js#validators.

## Usage

First, define your own validation functions, like so:

**validations.jsx**
```jsx
import isEmail from 'validator/lib/isEmail';

const Error = (props) => (
    <div {...props} style={{ color: '#A94442' }} />
);

export const email = (value, props, components) => {
    if (!isEmail(value)) {
        return (
            <Error>{`${value} is not a valid email.`}</Error>
        );
    }
};

export const required = (value, props, components) => {
    value = ('' + value).trim();
    if (!value) {
        return (
            <Error>{'This field is required.'}</Error>
        );
    }
};
```

To validate an component, pass an array of validation functions with the `validations` prop:

```jsx
<Input type="text" name="email" validations={[required, email]} />
```

Let's put it all together:

```jsx
<Form>
    <div className="form-group">
        <label>{'E-mail*'}</label>
        <Input type="email" name="email" className="form-control" validations={[required, email]} />
    </div>
    <div className="form-group">
        <label>{'Password*'}</label>
        <Input type="password" name="password" className="form-control" validations={[required]} />
    </div>
    <div className="form-group">
        <label>{'Gender*'}</label>
        <Select name="gender" value="" className="form-control" validations={[required]}>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </Select>
    </div>
    <div className="form-group">
        <label>{'Description'}</label>
        <Textarea name="description" validations={[]} />
    </div>
</Form>
```

## Examples

### Sign In

```jsx
import { Form, Input } from '@trendmicro/react-validation';
import React, { Component } from 'react';
import * as validations from './validations';

export default class SignIn extends Component {
    render() {
        return (
            <Form
                ref={node => {
                    this.form = node;
                }}
                onSubmit{event => {
                    event.preventDefault();
                }}
                onValidate={err => {
                    if (err) {
                        // You can disable button on validation error
                        return;
                    }
                }}
            >
                <div className="form-group">
                    <label>{'E-mail*'}</label>
                    <Input
                        type="email"
                        name="email"
                        className="form-control"
                        validations={[validations.required, validations.email]}
                    />
                </div>
                <div className="form-group">
                    <label>{'Password*'}</label>
                    <Input
                        type="password"
                        name="password"
                        className="form-control"
                        validations={[validations.required]}
                    />
                </div>
                <div className="form-group">
                    <Button
                        btnStyle="flat"
                        onClick={() => {
                            this.form.validate(err => {
                                if (err) {
                                    return;
                                }

                                const values = this.form.getValues();
                                // -> { email: "somebody@example.com", password: "xxxxxx" }
                            });
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </Form>
        );
    }
}
```

## Form Component

```jsx
<Form
    {...props}
    ref={node => {
        this.form = node;
    }}
    onValidate={err => { // Error-first callback
        if (err) {
            return;
        }
    }}
/>
```
### Methods

### validate([name], [callback])

Validates the form or validates controls with the specific name.

**Arguments**

1. [name] *(String)*: The name property in the control.
2. [callback] *(Function)*: The error-first callback.

**Example**

```js
this.form.validate(err => { // Error-first callback
    if (err) {
        return;
    }
    
    const values = this.form.getValues();
})
```

### getValues()

Get form control values.

**Return**

*(Object)*: Returns an object containing name/value pairs.

**Example**

```js
this.form.getValues();
// -> { email: "somebody@example.com", password: "......" }
```

### Props

Name        | Type     | Default | Description
:---------- | :------- | :------ | :----------
onValidate  | function |         | An error-first callback to be called on validation.

### Class Properties

Name    | Type    | Default | Description
:------ | :------ | :------ | :----------
errors  | array   | []      | A list of validation errors.

**Example**

```js
this.form.errors;
// -> [{...}]
```

## Input Component

```jsx
<Input name="name" validations={[required]} />
```

### Props

Name        | Type   | Default | Description
:---------- | :----- | :------ | :----------
name        | string | N/A     | *(Required)* The name of the form control.
validations | array  | []      | An array of validation functions.

### Class Properties

Name    | Type    | Default | Description
:------ | :------ | :------ | :----------
checked | boolean | false   | Whether the control is checked - specifically checkbox and radio inputs.
value   | string  | ''      | The value of the form control.
blurred | boolean | false   | Whether the form control loses focus.
changed | boolean | false   | Whether the value or the checked state has changed.
error   | Node    | null    | A validation error.

## Select Component

```jsx
<Select name="gender" value="" className="form-control" validations={[required]}>
    <option value="">Select your gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
</Select>
```

### Props

Name        | Type   | Default | Description
:---------- | :----- | :------ | :----------
name        | string | N/A     | *(Required)* The name of the form control.
validations | array  | []      | An array of validation functions.

### Class Properties

Name    | Type    | Default | Description
:------ | :------ | :------ | :----------
value   | string  | ''      | The value of the form control.
blurred | boolean | false   | Whether the form control loses focus.
changed | boolean | false   | Whether the value has changed.
error   | Node    | null    | A validation error.

## Textarea Component

```jsx
<Textarea name="content" validations={[required]} />
```

### Props

Name        | Type   | Default | Description
:---------- | :----- | :------ | :----------
name        | string | N/A     | *(Required)* The name of the form control.
validations | array  | []      | An array of validation functions.

### Class Properties

Name    | Type    | Default | Description
:------ | :------ | :------ | :----------
value   | string  | ''      | The value of the form control.
blurred | boolean | false   | Whether the form control loses focus.
changed | boolean | false   | Whether the value has changed.
error   | Node    | null    | A validation error.

## Creating Custom Components

Instead of using built-it components, you can use `createForm` and `createFormControl` to wrap your own components:

```jsx
import { createForm, createFormControl } from '@trendmicro/react-validation';

// Form component
const Form = (props) => (
    <form {...props} />
);

// Input component
const Input = ({ error, blurred, changed, ...props }) => (
    <div>
        <input {...props} />
        {blurred && changed && error}
    </div>
);

const MyForm = createForm()(Form);
const MyInput = createFormControl()(Input);
```

### createForm([options])(component)

#### Arguments
* [options] *(Object)*: The options object.
* [options.onValidate] *(Function)*: An error-first callback to be called on validation.
* component *(Node)*: The component to be wrapped.

### createFormControl(options)(component)
* [options] *(Object)*: The options object.
* component *(Node)*: The component to be wrapped.

## License

MIT
