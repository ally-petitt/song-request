import React, { useRef } from 'react'
import { useHistory } from "react-router-dom"
import { Button, Container, Form } from "react-bootstrap"
import { Add } from "@material-ui/icons"

function JoinGroup({ onCodeSubmit, setIsAdmin }) {
    const codeRef = useRef()
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        // set group code state to submitted group code
        const code = codeRef.current.value
        onCodeSubmit(code)
    }

    const createNewCode = () => {
        let newCode = Math.floor(Math.random() * 10000000);

        // set new code
        onCodeSubmit(newCode)
        setIsAdmin(true)
    }

    return (
        <Container>
            <header>
                <Button onClick={createNewCode} className="create-group justify-content-center align-items-center bg-green">
                    <span>Create Group</span>
                    <Add />
                </Button>
            </header>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Group Code</Form.Label>
                    <Form.Control type="text" ref={codeRef} required />
                </Form.Group>
                <Button type="submit">Join</Button>
            </Form>
        </Container>
    )
}

export default JoinGroup
