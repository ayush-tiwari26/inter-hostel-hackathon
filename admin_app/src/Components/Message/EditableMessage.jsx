import React from 'react'
import { Button, Stack, TextField } from '@mui/material'
import { AdminContext } from '../../Providers/AdminStateProvider'
import axios from 'axios';

/**
 * Message Component to load old messages as well create new
 * @param  props.ticketId Message to be displayed
 * @param  props.message Message to be displayed
 * @param  props.setMessage Type of message to be displayed
 * @param  props.messageTimestamp Timestamp of message to be displayed
 * @param  props.setMessageTimestamp Setter
 * @param  props.editDisabled Boolean to disable edit button 
 * @return Message Component with given or edited Message, Timestamp
 */
//Props: message, setMessage, messageTimestamp, setMessageTimestamp, editDisable
export default function EditableMessage(props) {
    const { index, ticketId } = props;
    console.log(ticketId);
    const [message, setMessage] = React.useState("");
    const {
        adminTickets,
        setAdminTickets,
        adminToken,
        setSnackbarMessage,
        setOpenSnackbar,
        setSnackbarType
    } = React.useContext(AdminContext);
    //console.log(adminTickets)

    function createMessage() {
        console.log(ticketId)
        if (message.length === 0) return
        const data = JSON.stringify({
            "message": message
        })
        const config = {
            method: 'post',
            url: `https://hostel-complaint.herokuapp.com/tickets/${ticketId}/comment`,
            headers: {
                'Authorization': adminToken,
                'Content-Type': 'application/json'
            },
            data: data
        }
        axios(config)
            .then((response) => {
                const updatedTickets = [...adminTickets]
                updatedTickets[index] = response.data
                setAdminTickets(updatedTickets)
                console.log(adminTickets)
                setMessage("")
                setOpenSnackbar(true)
                setSnackbarMessage("Successfully created message")
                setSnackbarType("success")
            })
            .catch((error) => {
                console.log(error);
                setOpenSnackbar(true)
                setSnackbarMessage("Oops! Something went wrong...")
                setSnackbarType("error")
            })
    }

    return (
        <Stack
            direction="column"
            spacing={2}
        >
            <TextField
                id="outlined-multiline-flexible"
                label="Message"
                multiline
                maxRows={10}
                value={message}
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
            />
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    paddingBottom: 2
                }}>
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
            </Stack>
        </Stack>
    )
}