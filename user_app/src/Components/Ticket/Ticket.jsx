import React from 'react'
import Message from '../Message/Message';
import { Button, Stack, Typography } from '@mui/material';
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

    const { userTickets, setUserTickets } = React.useContext(UserContext);
    const { index, messages, title, description } = props;

    function createNewMessage() {
        //check if latest message is not empty
        if (!messages.length === 0 && messages[messages.length - 1].message.trim().length === 0) {
            //show snackbar
            //do not add new messagge
            return;
        }
        //create new message
        const newMessage = <Message />
        const updatedUserTickets = [...userTickets];
        updatedUserTickets[index].messages = [...messages, newMessage];
        setUserTickets(updatedUserTickets)
    }

    return (
        <div>
            <Stack
                direction="column"
                spacing={2}
            >
                <Typography
                    variant="h2"
                    component="h3">
                    {title}
                </Typography>;
                <Typography
                    variant="h4"
                    component="h5">
                    {description}
                </Typography>
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