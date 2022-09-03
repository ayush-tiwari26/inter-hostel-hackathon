import React from 'react'
import Snackbar from '../Components/Snackbar/Snackbar'
import Ticket from '../Components/Ticket/Ticket'
import { Button, Stack } from '@mui/material'
import { UserContext } from '../Providers/UserStateProvider'


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
    const { userTickets, setUserTickets } = React.useContext(UserContext);
    //Function to create all tickets and messages from the db
    function makeTickets() {
        //map all tickets from userContext and display
        return (
            <div>
                {userTickets.map((ticket, index) => {
                    return <Ticket
                        index={index}
                        messages={ticket.messages}
                        title={ticket.title}
                        description={ticket.description}
                        status={ticket.status}
                    />
                })}
            </div>
        )
    }

    //create new ticket
    function createNewTicket() {
        if (userTickets.length !== 0) {
            const lastTicket = userTickets[userTickets.length - 1];
            if ((lastTicket.title).trim().length === 0 || (lastTicket.description).trim().length === 0) {
                //show snackbar
                setOpenSnackbar(true);
                setSnackbarMessage("Please fill the last ticket before creating new");
                setSnackbarType("error");
                return;
            }
            //create new ticket
            const newTicket = <Ticket />
            setUserTickets([...userTickets, newTicket]);
        }
    }

    return (
        <div>
            <Stack
                direction="column"
                spacing={2}>
                {makeTickets()}
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
        </div>
    )
}