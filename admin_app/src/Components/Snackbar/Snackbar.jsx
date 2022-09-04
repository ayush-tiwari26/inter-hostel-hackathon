import React from 'react'
import { Alert, Snackbar as SBar } from '@mui/material'

export default function Snackbar(props) {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.setOpen(false);
    };

    return (
        <SBar open={props.open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.type} sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </SBar>
    )
}
