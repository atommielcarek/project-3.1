import { Button, Form, Container } from 'semantic-ui-react'
import Auth from "../utils/auth";

const FormExampleForm = () => (

    <Container>

        <Form>
            <Form.Field>
                <label>Username</label>
                <input placeholder='Username' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
            </Form.Field>

            <Button type='submit' onClick={() => Auth.login()}>Login</Button>
        </Form>
    </Container>
)

export default FormExampleForm