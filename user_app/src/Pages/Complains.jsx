import React from 'react'
import Snackbar from '../Components/Snackbar/Snackbar'
import Ticket from '../Components/Ticket/Ticket'
import { Button, Stack } from '@mui/material'

export default function Complaints() {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState(false);
    const [snackbarType, setSnackbarType] = React.useState("success");
    React.useEffect(() => {
        //set state for snackbar
        setOpenSnackbar(true);
        setSnackbarMessage("Login Successful");
        setSnackbarType("success");
    }, [])

    //Function to create all tickets and messages from the db
    function makeTickets(){
        
    }

    //create new ticket
    function createNewTicket(){
        
    }

    return (
        <>
            <Stack
                direction="column"
                spacing={2}>
                <Ticket />
                <Button
                    variant="contained"
                    color="success"
                    sx={{
                        width: '200px'
                    }}
                    onClick={createNewTicket}>
                    Create Ticket
                </Button>
            </Stack>
            <Snackbar
                open={openSnackbar}
                setOpen={setOpenSnackbar}
                message={snackbarMessage}
                type={snackbarType}>
            </Snackbar>
        </>
    )
}
