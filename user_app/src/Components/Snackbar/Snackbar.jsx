import React from 'react'
import { Alert, Snackbar as SBar } from '@mui/material'
import { UserContext } from '../../Providers/UserStateProvider'

export default function Snackbar() {
    const {
        openSnackbar,
        setOpenSnackbar,
        snackbarMessage,
        snackbarType,
      } = React.useContext(UserContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <SBar open={openSnackbar} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={snackbarType} sx={{ width: '100%' }}>
                {snackbarMessage}
            </Alert>
        </SBar>
    )
}
