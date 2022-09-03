import React from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'

/**
 * Message Component to load old messages as well create new
 * @param  props.message Message to be displayed
 * @param  props.setMessage Type of message to be displayed
 * @param  props.messageTimestamp Timestamp of message to be displayed
 * @param  props.setMessageTimestamp Setter
 * @param  props.editDisabled Boolean to disable edit button 
 * @return Message Component with given or edited Message, Timestamp
 */
//Props: message, setMessage, messageTimestamp, setMessageTimestamp, editDisable
export default function Message(props) {
    const { message, setMessage } = props;
    function createMessage() {
        //TODO: Create Message & Post it in backend
        try {
            //send message along props.ticketId to get curr ticket
        } catch (err) {
            console.log(err);
        }
    }

    function handleEdit() {
        if (props.editDisable) {
            console.log("Edit Disabled");
        } else {
            console.log("Edit Enabled");
            return (
                <Stack
                    direction="row"
                    spacing={2}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setMessage("")}>
                        Clear
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={createMessage}>
                        Send
                    </Button>
                </Stack>);
        }
    }

    function getTextBox() {
        if (props.editDisable) {
            console.log("Edit Disabled");
            return (
                <Typography variant="p" component="p">
                    {message}
                </Typography>
            )
        } else {
            console.log("Edit Enabled");
            return (
                <TextField
                    id="outlined-multiline-flexible"
                    label="Message"
                    multiline
                    maxRows={10}
                    value={message}
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}
                />);
        }
    }

    return (
        <Stack
            direction="column"
            spacing={2}>
            {getTextBox()}
            {handleEdit()}
        </Stack>
    )
}
