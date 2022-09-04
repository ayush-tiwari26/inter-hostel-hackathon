import React from 'react'
import { Alert, Snackbar as SBar } from '@mui/material'
import { AdminContext } from '../../Providers/AdminStateProvider'

export default function Snackbar() {
    const [state, setState] = React.useState({
        vertical: 'bottom',
        horizontal: 'right',
    });
    const { vertical, horizontal, open } = state;
    const {
        openSnackbar,
        setOpenSnackbar,
        snackbarMessage,
        snackbarType,
    } = React.useContext(AdminContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <SBar
            anchorOrigin={{ vertical, horizontal }}
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity={snackbarType} sx={{ width: '100%' }}>
                {snackbarMessage}
            </Alert>
        </SBar>
    )
}
