import React from 'react'
import { useState } from 'react';

export default function InputField(props) {
    var [newFieldName, setNewFieldName] = useState("");
    var [newFieldValue, setNewFieldValue] = useState("");


    return (
        <div className='container'>
            <label htmlFor="name" className='text-end p-1 px-3 col-4 my-1'>{props.name}:</label>
            <input id="name" className='px-2 col-8 my-1' value={newFieldName}
                onChange={(e) => {
                    e.preventDefault();
                    setNewFieldName(e.target.value)
                    props.handleChange(newFieldName, newFieldValue, props.keys)
                }} />
            <label htmlFor="value" className='text-end p-1 px-3 col-4 my-1'>{props.value}:</label>
            <input id="value" className='px-2 col-8 my-1' value={newFieldValue}
                onChange={(e) => {
                    e.preventDefault();
                    setNewFieldValue(e.target.value);
                    props.handleChange(newFieldName, e.target.value, props.keys)
                }} />
        </div>
    )
}

InputField.defaultProps ={
    name: "Title",
    value: "Description",
    keys: Date.now()
}
