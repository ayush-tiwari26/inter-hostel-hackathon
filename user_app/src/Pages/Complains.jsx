import React from 'react'
import Snackbar from '../Components/Snackbar/Snackbar'
import ReadableTicket from '../Components/Ticket/ReadableTicket'
import EditableTicket from '../Components/Ticket/EditableTicket'
import { Grid, Stack } from '@mui/material'
import { UserContext } from '../Providers/UserStateProvider'
import axios from 'axios'

export default function Complains() {
    const {
        userTickets,
        setUserTickets,
        userToken,
        setOpenSnackbar,
        setSnackbarMessage,
        setSnackbarType
    } = React.useContext(UserContext);
    React.useEffect(() => {
        //set state for snackbar
        //TODO: Fetch user tickets
        let config = {
            method: 'get',
            url: 'https://hostel-complaint.herokuapp.com/tickets',
            headers: {
                'Authorization': userToken,
            }
        }
        axios(config)
            .then((response) => {
                setUserTickets(response.data);
                setSnackbarMessage("Tickets Loaded")
                setSnackbarType("success")
                setOpenSnackbar(true)
            })
            .catch((error) => {
                setSnackbarMessage("Failed to load tickets")
                setSnackbarType("error")
                setOpenSnackbar(true)
                console.log(error)
            });
    }, [])
    //Function to create all tickets and messages from the db
    function createReadableTickets() {
        //map all tickets from userContext and display
        return (
            <Grid
                sx={{
                    padding: 2
                }}>
                <Grid item>
                    {userTickets.map((ticket, index) => {
                        return <ReadableTicket
                            index={index}
                            key={index}
                            messages={ticket.comments}
                            title={ticket.title}
                            description={ticket.description}
                            status={ticket.status}
                            ticketId={ticket.id}
                        />
                    })}
                </Grid>
            </Grid>
        )
    }

    function showEditableTicket() {
        return (
            <Grid
                container
                spacing={4}
                sx={{
                    padding: 2
                }}>
                <EditableTicket />
            </Grid>
        )
    }

    return (
        <div>
            <Stack
                direction="column"
                spacing={2}>
                {createReadableTickets()}
                {showEditableTicket()}
            </Stack>
            <Snackbar />
        </div>
    )
}