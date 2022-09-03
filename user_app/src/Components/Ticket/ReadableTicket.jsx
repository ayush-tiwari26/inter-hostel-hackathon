import React from 'react'
import ReadableMessage from '../Message/ReadableMessage';
import EditableMessage from '../Message/EditableMessage';
import { Box, Button, Modal, Stack, Typography } from '@mui/material';

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
    const {
        index,
        messages,
        title,
        description,
        ticketId } = props;
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [openModal, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    function createReadableMessages() {
        //Create all messaes for this tickets and return it
        if (!messages) return;
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

    function showEditableMessage() {
        return (
            <EditableMessage index={index} ticketId={ticketId}>
            </EditableMessage>
        )
    }

    return (
        <Stack
            direction="column"
            spacing={2}
            sx={{
                width: '30%'
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
// <Button
//                 onClick={handleModalOpen}>
//                 Open Modal
//             </Button>
//             <Modal
//                 open={openModal}
//                 onClose={handleModalClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             ></Modal>