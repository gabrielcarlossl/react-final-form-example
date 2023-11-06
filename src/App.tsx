/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import styled from 'styled-components'
import validator from 'validator'
import Input from './components/Input'
import Form from './components/Form'


const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
  margin-bottom: 1em;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;


function App() {

  return (
    <>
      <h1>React Final Form Example</h1>
      <Form onSubmit={(values) => {console.log('Submitting...', values)}}>
        {(props) => (
          <FormWrapper>
            <Group>
              <Label>
                Username
              </Label>
              <Input name='name' placeholder='Username' initialValue={undefined} validate={(v: any) => !validator.isEmail(v || '') && 'Please Enter a valid Email!' } />
            </Group>
            <Group>
              <Label>
                Password
              </Label>
              <Input name='password' type='password' placeholder='Password' initialValue={undefined} validate={undefined} />
            </Group>
            <Group>
              <button disabled={props.hasSubmitErrors} type='submit'>Login</button>
            </Group>
          </FormWrapper>
        )}
      </Form>
    </>
  )
}

export default App
