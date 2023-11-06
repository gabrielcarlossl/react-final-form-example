import React from 'react'

import { Form as FinalForm, FormProps, FormRenderProps } from 'react-final-form'

const Form = (props: FormProps) => {
  return (
    <FinalForm 
        onSubmit={props.onSubmit} 
        render={(renderProps: FormRenderProps) => (
          <form onSubmit={renderProps.handleSubmit}>
            {props.children && typeof props.children === 'function' && props.children(renderProps)}
          </form>
        )}
    />
  )
}

export default Form