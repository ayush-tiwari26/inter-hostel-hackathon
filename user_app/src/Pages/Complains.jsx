import React from 'react'
import Snackbar from '../Components/Snackbar/Snackbar'
import ReadableTicket from '../Components/Ticket/ReadableTicket'
import { Button, Stack } from '@mui/material'
import { UserContext } from '../Providers/UserStateProvider'


export default function Complains() {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState(false);
    const [snackbarType, setSnackbarType] = React.useState("success");
    React.useEffect(() => {
        //set state for snackbar
        setOpenSnackbar(true);
        setSnackbarMessage("Login Successful");
        setSnackbarType("success");
    }, [])
    const { userTickets } = React.useContext(UserContext);

    //Function to create all tickets and messages from the db
    function createReadableTickets() {
        //map all tickets from userContext and display
        return (
            <div>
                {userTickets.map((ticket, index) => {
                    return <ReadableTicket
                        index={index}
                        messages={ticket.messages}
                        title={ticket.title}
                        description={ticket.description}
                        status={ticket.status}
                        ticketId={ticket.ticketId}
                    />
                })}
            </div>
        )
    }

    //create new ticket
    function createEditableTicket() {
        console.log("Create Command for new Ticket and adding to ticket list")
    }

    return (
        <div>
            <Stack
                direction="column"
                spacing={2}>
                {createReadableTickets()}
                <Button
                    variant="contained"
                    color="success"
                    sx={{
                        width: '200px'
                    }}
                    onClick={createEditableTicket}>
                    Create Ticket
                </Button>
            </Stack>
            <Snackbar
                open={openSnackbar}
                setOpen={setOpenSnackbar}
                message={snackbarMessage}
                type={snackbarType}>
            </Snackbar>
        </div>
    )
}