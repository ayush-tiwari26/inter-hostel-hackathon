import React from 'react'
import Snackbar from '../Components/Snackbar/Snackbar'
import ReadableTicket from '../Components/Ticket/ReadableTicket'
import { Button, Grid, Stack } from '@mui/material'
import { AdminContext } from '../Providers/AdminStateProvider'

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
    const { adminTickets } = React.useContext(AdminContext);

    //Function to create all tickets and messages from the db
    function createReadableTickets() {
        //map all tickets from adminContext and display
        return (
            <Grid
                spacing={4}
                sx={{
                    padding: 2
                }}>
                <Grid item>
                    {adminTickets.map((ticket, index) => {
                        return <ReadableTicket
                            index={index}
                            messages={ticket.messages}
                            title={ticket.title}
                            description={ticket.description}
                            status={ticket.status}
                            ticketId={ticket.ticketId}
                        />
                    })}
                </Grid>
            </Grid>
        )
    }

    return (
        <div>
            <Stack
                direction="column"
                spacing={2}>
                {createReadableTickets()}
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