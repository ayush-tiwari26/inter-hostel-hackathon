import React from 'react'
import axios from 'axios';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { UserContext } from '../../Providers/UserStateProvider';

/**
 * Message Component to load old messages as well create new
 * @param  props.ticketIdx Idx to be displayed
 * @param  props.ticketIdx Idx to be displayed
 * @param  props.ticketIdx Idx to be displayed
 * @param  props.message All necessary message data
 * @param  props.messageTimestamp Timestamp of message to be displayed
 * @param  props.setMessageTimestamp Setter
 * @param  props.editDisabled Boolean to disable edit button 
 * @return Message Component with given or edited Message, Timestamp
 */
export default function EditableTicket(props) {
    const [ticketTitle, setTicketTitle] = React.useState("");
    const [ticketDescription, setTicketDescription] = React.useState("");
    const {
        userTickets,
        setUserTickets,
        userToken,
        setSnackbarMessage,
        setSnackbarType,
        setOpenSnackbar,
    } = React.useContext(UserContext);

    function saveTicket() {
        setTicketTitle(ticketTitle.trim())
        setTicketDescription(ticketDescription.trim())
        if (!ticketTitle || !ticketDescription) {
            setSnackbarMessage("Please fill out all fields")
            setOpenSnackbar(true)
            setSnackbarType("error")
            return
        }
        //save this new ticket
        const data = JSON.stringify({
            "title": ticketTitle,
            "description": ticketDescription,
        })
        const config = {
            method: 'post',
            url: 'https://hostel-complaint.herokuapp.com/tickets',
            headers: {
                'Authorization': userToken,
                'Content-Type': 'application/json'
            },
            data: data
        }
        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data))
                setUserTickets([...userTickets, response.data])
                setSnackbarMessage("Successfully created ticket")
                setOpenSnackbar(true)
                setSnackbarType("success")
            })
            .catch((error) => {
                setSnackbarMessage("Oops! Something went wrong...")
                setOpenSnackbar(true)
                setSnackbarType("error")
                console.error(error);
            })
    }

    return (
        <div>
            <Stack
                direction="column"
                spacing={2}>

                <Typography variant="h4" component="h2">
                    Raise new Complain Ticket
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    value={ticketTitle}
                    onChange={(event) => setTicketTitle(event.target.value)} />
                <TextField
                    id="outlined-password-input"
                    label="Description"
                    autoComplete="current-password"
                    value={ticketDescription}
                    onChange={(event) => setTicketDescription(event.target.value)}
                />
                <Button
                    variant="contained"
                    color="success"
                    onClick={saveTicket}
                    sx={{
                        width: '200px',
                    }}>
                    Raise Ticket
                </Button>
            </Stack>
        </div>
    )
}