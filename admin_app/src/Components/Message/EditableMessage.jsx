import React from 'react'
import { Button, Stack, TextField } from '@mui/material'
import { AdminContext } from '../../Providers/AdminStateProvider'

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
    const { adminTickets, setAdminTickets } = React.useContext(AdminContext);
    const [message, setMessage] = React.useState("");
    //console.log(adminTickets)

    function createMessage() {
        if(message.length === 0) return
        try {
            //send message along props.ticketId to get curr ticket
            //TODO: Create Message Post it in backend 
            //TODO {"message":"<>", "ticketId":"<>"}
            //TODO: Add Message to List of this Ticket Id
            const updatedAdminTickets = adminTickets
            updatedAdminTickets[index].messages.push({
                "message": message
            })
            console.log("createMessage called")
            console.log(updatedAdminTickets[index].messages)
            setAdminTickets(updatedAdminTickets.map((ticket) => ticket))
            setMessage("")
        } catch (err) {
            console.log(err);
        }
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
                    paddingBottom:2
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