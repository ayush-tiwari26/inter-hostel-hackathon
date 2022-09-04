import React from 'react'
import { Button, Grid, Stack, TextField } from '@mui/material'
import Snackbar from '../Components/Snackbar/Snackbar'

export default function Login(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage,     setSnackbarMessage] = React.useState(false);
    const [snackbarType, setSnackbarType] = React.useState("success");

    //Function to validate email
    const validateEmail = (email) => {
        //TODO: Validate email
        return true;
        // return String(email)
        //     .toLowerCase()
        //     .match(
        //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //     );
    };

    //Handels the Login for the admin
    function handleLogin() {
        console.log("Enter Triggered 1");
        //TODO: Handle Login and set admin as login
        if (validateEmail(email)) {
            console.log("Enter Triggered 2");
            //TODO: Login the admin
            setSnackbarMessage("Login Successful");
            setSnackbarType("success");
            setOpenSnackbar(true);
            props.setIsLogin(true);
        } else {
            console.log("email invalid");
        }
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <Stack
                    direction="column"
                    spacing={2}
                    sx={{
                        width: '300px'
                    }}>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={(event) => setEmail((event.target.value).trim())} />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword((event.target.value).trim())}
                    />
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        justifyContent="center">
                        <Button
                            variant="contained"
                            color="success"
                            onClick={handleLogin}>
                            Enter
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={() => {
                                setEmail("");
                                setPassword("");
                            }}>
                            Clear
                        </Button>
                    </Stack>
                </Stack>
            </Grid>
            <Snackbar
                open={openSnackbar}
                setOpen={setOpenSnackbar}
                message={snackbarMessage}
                type={snackbarType}>
            </Snackbar>
        </Grid>
    )
}