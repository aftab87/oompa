import React from "react";
import {Form} from "react-bootstrap";

/**
 * ### Example Use:
 *
 *      &lt;Form className="container"&gt;<br>
 *          &emsp;&emsp;&lt;Input type="text" id="username" key="username" label="Username" value={"Hello World"} required className="mb-5" onInput={inputHandler}/&gt;<br>
 *          &emsp;&emsp;&lt;input type="submit" value="submit"/&gt;<br>
 *      &lt;/Form&gt;
 *
 */
const Input = React.forwardRef((props, ref) => {


    const getFormControl = () => {
        let inputProps = {
            id: props.id,
            type: props.type,
            as: props.as,
            rows: props.rows,
            onInput: props.onInput,
            ref: ref,
        }
        if (props.required === true)
            inputProps.required = "required"

        return React.createElement(Form.Control, inputProps)
    }

    return (
        <Form.Group key={props.id} className={props.className}>
            <Form.Label htmlFor={props.id}>{props.label}</Form.Label>
            {getFormControl()}
        </Form.Group>
    )
});

export default Input;