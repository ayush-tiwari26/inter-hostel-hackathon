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
    const { title, description, ticketId, editable } = props;
    const [ticketTitle, setTicketTitle] = React.useState(title);
    const [ticketDescription, setTicketDescription] = React.useState(description);
    const { userTickets, setUserTickets } = React.useContext(UserContext);

    function saveTicket() {
        //save this new ticket
        const newTicket = {
            "title": ticketTitle,
            "description": ticketDescription,
        }
        //TODO: POST THIS TICKET AND ADD TO USER TICKETS
        //TODO: Make Post request to save this ticket
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