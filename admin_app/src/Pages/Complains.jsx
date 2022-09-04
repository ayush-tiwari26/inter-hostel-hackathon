import React from 'react'
import Snackbar from '../Components/Snackbar/Snackbar'
import ReadableTicket from '../Components/Ticket/ReadableTicket'
import { Grid, Stack } from '@mui/material'
import { AdminContext } from '../Providers/AdminStateProvider'
import axios from 'axios'

export default function Complains() {
    const {
        adminTickets,
        setAdminTickets,
        adminToken,
        setOpenSnackbar,
        setSnackbarMessage,
        setSnackbarType
    } = React.useContext(AdminContext);
    React.useEffect(() => {
        //set state for snackbar
        //TODO: Fetch admin tickets
        let config = {
            method: 'get',
            url: 'https://hostel-complaint.herokuapp.com/tickets',
            headers: {
                'Authorization': adminToken,
            }
        }
        axios(config)
            .then((response) => {
                setAdminTickets(response.data);
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
        //map all tickets from adminContext and display
        return (
            <Grid
                sx={{
                    padding: 2
                }}>
                <Grid item>
                    {adminTickets.map((ticket, index) => {
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

    return (
        <div>
            <Stack
                direction="column"
                spacing={2}>
                {createReadableTickets()}
            </Stack>
            <Snackbar />
        </div>
    )
}