import React from 'react'
import Message from '../Message/Message';
import { Button, Stack } from '@mui/material';

/**
 * Message Component to load old messages as well create new
 * @param  props.ticketId Id to be displayed
 * @param  props.ticketId Id to be displayed
 * @param  props.ticketId Id to be displayed
 * @param  props.message All necessary message data
 * @param  props.messageTimestamp Timestamp of message to be displayed
 * @param  props.setMessageTimestamp Setter
 * @param  props.editDisabled Boolean to disable edit button 
 * @return Message Component with given or edited Message, Timestamp
 */
export default function Ticket(props) {
    const [message, setMessage] = React.useState("Default Message");
    //TODO: Get ticketId from props
    // display all existing messages
    // display new message button

    function makeMessages() {
        //TODO: Create all messaes for this tickets and return it
        return (
            <Message
                message={message}
                setMessage={setMessage}
                editDisable={false}>
            </Message>
        )
    }

    function createNewMessage() {

    }

    return (
        <div>
            <Stack
                direction="column"
                spacing={2}
            >
                {makeMessages()}
                <Button
                    variant="contained"
                    color="success"
                    sx={{
                        width: '100px',
                    }}
                    onClick={createNewMessage}>
                    Comment
                </Button>
            </Stack>
        </div>
    )
}