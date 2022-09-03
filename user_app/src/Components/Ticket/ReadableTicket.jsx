import React from 'react'
import ReadableMessage from '../Message/ReadableMessage';
import EditableMessage from '../Message/EditableMessage';
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
export default function ReadableTicket(props) {
    const { index, messages, title, description, ticketId} = props;
    const [ticketTitle, setTicketTitle] = React.useState(title);
    const [ticketDescription, setTicketDescription] = React.useState(description);
    const { userTickets, setUserTickets } = React.useContext(UserContext);

    function createReadableMessages() {
        //Create all messaes for this tickets and return it
        console.log(messages);
        return (<div>
            {messages.map((message, index) => {
                return (
                    <ReadableMessage
                        message={message}
                        key={index}>
                    </ReadableMessage>
                )
            }
            )}
        </div>)
    }

    function createEditableMessage(){
        console.log("Request for Creating Editable message from Readable Ticket")
    }
    function showEditableMessage(){
        return(
            <EditableMessage index={index} ticketId={ticketId}>
            </EditableMessage>
        )  
    }

    return (
            <Stack
                direction="column"
                spacing={2}
                sx={{
                    width:'30%'
                }}
            >
                <Typography
                    variant="h5">
                    {title}
                </Typography>
                <Typography
                    variant="p">
                    {description}
                </Typography>
                {createReadableMessages()}
                {showEditableMessage()}
            </Stack>
    )
}