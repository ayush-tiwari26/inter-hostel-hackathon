import React from 'react'
import Message from '../Message/ReadableMessage';
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
    const { index, messages, title, description, ticketId, editable} = props;
    const [ticketTitle, setTicketTitle] = React.useState(title);
    const [ticketDescription, setTicketDescription] = React.useState(description);
    const [message, setMessage] = React.useState(" ");
    const { userTickets, setUserTickets } = React.useContext(UserContext);
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
        //check if latest message is not empty
        if (!messages.length !== 0 && (messages[messages.length - 1].message || messages[messages.length - 1].message.trim().length === 0)) {
            //show snackbar
            //do not add new messagge
            return;
        }
        //create new message
        const newMessage = <Message ticketId={ticketId} />
        const updatedUserTickets = [...userTickets];
        updatedUserTickets[index].messages = [...messages, newMessage];
        setUserTickets(updatedUserTickets)
    }

    function saveTicket() {
        //save this new ticket
        const newTicket = {
            "title": ticketTitle,
            "description": ticketDescription,
        }
        //TODO: POST THIS TICKET AND ADD TO USER TICKETS
        //TODO: Make Post request to save this ticket
    }

    function getTicketHeaders() {
        console.log(editable)
        if (editable === true) {
            console.log("Added new ticket to ui")
            return (
                <Stack
                    direction="column"
                    spacing={2}>
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        value={ticketTitle}
                        onChange={(event) => setTicketTitle((event.target.value).trim())} />
                    <TextField
                        id="outlined-password-input"
                        label="Description"
                        autoComplete="current-password"
                        value={ticketDescription}
                        onChange={(event) => setTicketDescription((event.target.value).trim())}
                    />
                    <Button
                        variant="contained"
                        color="success"
                        onClick={saveTicket}>
                        Create
                    </Button>
                </Stack>
            )
        } else {
            return (
                <div>
                    <Typography
                        variant="h5">
                        {title}
                    </Typography>
                    <Typography
                        variant="p">
                        {description}
                    </Typography>
                </div>
            )
        }
    }

    return (
        <div>
            <Stack
                direction="column"
                spacing={2}
            >
                {getTicketHeaders()}
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