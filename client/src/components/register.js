import { Button, Checkbox, Form, Container } from 'semantic-ui-react'

const FormExampleForm = () => (
   <Container>
    <Form>
        <Form.Field>
            <label>Username</label>
            <input placeholder='Username' />
        </Form.Field>
        <Form.Field>
            <label>E-mail</label>
            <input placeholder='E-mail' />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Register</Button>
    </Form>
   </Container>
)
export default FormExampleForm