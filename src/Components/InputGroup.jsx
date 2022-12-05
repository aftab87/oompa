import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

/**
 * This component returns a Form Group with a label, an input, and validation!
 * ### Example Use:
 *
 *     Check src/Examples/FormExample
 *
 */
const InputGroup = React.forwardRef((props, ref) => {
    const [error, setError] = useState(null)

    const isRequired = () => {
        return props.required === true || props.required === 'required'
    }

    const checkRegex = (value) => {
        let pattern = props.pattern;

        return !pattern || pattern.test(value)
    }

    // TODO: pattern test not working correctly
    const validate = (e) => {
        let value = e.target.value;
        
        if (isRequired() && !value){
            e.target.classList.add("invalid")
            e.target.classList.remove("valid")
            setError(props.label + " is required")
        }else if (!checkRegex(value)) {
            e.target.classList.add("invalid")
            e.target.classList.remove("valid")
            setError(props.errorMessage)
        } else {
            e.target.classList.add("valid")
            e.target.classList.remove("invalid")
            setError(null)
        }
    }

    const onInput = (e) => {
        validate(e)
    }

    const getFormControl = () => {
        const inputProps = { ...props }

        inputProps.onInput = onInput;
        return React.createElement(Form.Control, inputProps);
    }

    // TODO: Add a success message prop?
    return (
        <Form.Group className={props.className} controlId={props.id}>
            <Form.Label>
                <strong>{props.label}
                    {isRequired() && <span style={{ color: '#D63384' }}> *</span>}
                </strong>
            </Form.Label>
            {getFormControl()}
            <Form.Control.Feedback type="invalid">{error ? error : props.label + " is required"}</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
                Looks Good!
            </Form.Control.Feedback>
        </Form.Group>
    )
});

export default InputGroup;