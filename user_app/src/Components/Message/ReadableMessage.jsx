import React from 'react'
import { Stack, Typography } from '@mui/material'

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
export default function ReadableMessage(props) {
    const { message } = props;
    return (
        <Stack
            direction="column"
            spacing={2}>
            <Typography variant="p" component="p">
                {message.message}
            </Typography>
        </Stack>
    )
}