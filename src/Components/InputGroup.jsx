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

    const validate = (e) => {
        let value = e.target.value;

        if (isRequired() && !value) {
            e.target.classList.add("is-invalid")
            e.target.classList.remove("is-valid")
            setError(props.label + " is required")
        } else if (!checkRegex(value)) {
            e.target.classList.add("is-invalid")
            e.target.classList.remove("is-valid")
            setError(props.pattern_message)
        } else if (props.password && value !== props.password) {
            console.log(value + ' - ' + props.password)
            e.target.classList.add("is-invalid")
            e.target.classList.remove("is-valid")
            setError("Passwords must match")
        } else {
            e.target.classList.add("is-valid")
            e.target.classList.remove("is-invalid")
            setError(null)
        }
    }

    const shouldShowLabel = () => {
        return !(props.type === "checkbox" || props.type === "switch" || props.type === "radio")
    }

    const onInput = (e) => {
        if (props.clear_error)
            props.clear_error(null)
        if (props && props.set_password)
            props.set_password(e.target.value)
        if (shouldShowLabel)
            validate(e)
    }

    const getFormControl = () => {
        const inputProps = { ...props }

        inputProps.ref = ref;
        // inputProps.validated = "validated";
        // inputProps.controlId = props.label.replace(" ", "")

        switch (props.type) {
            case "select":
                return React.createElement(Form.Select, inputProps, [props.children]);
            case "checkbox":
                return React.createElement(Form.Check, inputProps);
            case "switch":
                return React.createElement(Form.Switch, inputProps);
            case "radio":
                return React.createElement(Form.Check, inputProps);
            default:
                inputProps.onInput = onInput;
                return React.createElement(Form.Control, inputProps);
        }
    }

    // TODO: Add a success message prop?
    // FIXME: GlobalStyle.jsx is overwriting the span's font color
    return (
        <Form.Group className={props.className + " mb-4"} controlId={props.id}>

            {shouldShowLabel() &&
                <Form.Label>
                    <strong>{props.label}
                        {isRequired() && <span style={{ color: '#D63384' }}> *</span>}
                    </strong>
                </Form.Label>}
            {getFormControl()}

            <Form.Control.Feedback type="valid">Looks Good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">{error ? error : props.label + " is required"}</Form.Control.Feedback>
        </Form.Group>
    )
});

export default InputGroup;