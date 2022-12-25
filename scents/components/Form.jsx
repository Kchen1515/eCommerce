import React from 'react';
import {useState} from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const [val, setVal] = useState({})
  const {register, handleSubmit, formState: {errors}} = useForm()

  return (
    <div>
      <form onSubmit={handleSubmit((data) => {
        setVal(data)
        console.log('This:' + JSON.stringify(val))
      })}>
        <input {...register('firstName', {required: 'This is required', minLength: {
          value: 4,
          message: "Have not reached min length"
        }})}   placeholder="First Name"/>
        <p>{errors.firstName?.message}</p>
        <input {...register('lastName')}  placeholder="Last Name"/>
        <select {...register('select')}>
          <option>1</option>
          <option>2</option>
        </select>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Form;