import React from 'react'
import axios from 'axios'
import { Button, Grid, Stack, TextField } from '@mui/material'
import { UserContext } from '../Providers/UserStateProvider'

export default function Login(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {
        userToken,
        setUserToken,
        setUserTickets,
        setOpenSnackbar,
        setSnackbarMessage,
        setSnackbarType
    } = React.useContext(UserContext);
    //Function to validate email
    const validateEmail = (email) => {
        //TODO: Validate email
        return true
        // return String(email)
        //     .toLowerCase()
        //     .match(
        //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //     );
    };

    //Handels the Login for the user
    function handleLogin() {
        const data = JSON.stringify({
            "email": email,
            "password": password
        })
        const config = {
            method: 'post',
            url: 'https://hostel-complaint.herokuapp.com/student/signin',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        if (validateEmail(email)) {
            console.log("Login Triggered");
            axios(config)
                .then((response) => {
                    console.log(response.headers.authorization);
                    setUserToken(response.headers.authorization)
                    setSnackbarMessage("Login Successful");
                    setSnackbarType("success");
                    setOpenSnackbar(true);
                    props.setIsLogin(true);
                })
                .catch((error) => {
                    console.log(error);
                    setSnackbarMessage("Login Failed");
                    setSnackbarType("error");
                    setOpenSnackbar(true);
                    props.setIsLogin(false);
                });
        } else {
            setSnackbarMessage("Invalid Email");
            setSnackbarType("error");
            setOpenSnackbar(true);
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
        </Grid>
    )
}
