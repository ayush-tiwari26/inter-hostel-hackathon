import React from 'react'

export const UserContext = React.createContext()

const UserStateProvider = ({ children }) => {
    const [userEmail, setUserEmail] = React.useState("")
    const [userToken, setUserToken] = React.useState("")
    const [userTickets, setUserTickets] = React.useState([])
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState(false);
    const [snackbarType, setSnackbarType] = React.useState("success");

    return (
        <UserContext.Provider value={{
            userEmail,
            setUserEmail,
            userToken,
            setUserToken,
            userTickets,
            setUserTickets,
            openSnackbar,
            setOpenSnackbar,
            snackbarMessage,
            setSnackbarMessage,
            snackbarType,
            setSnackbarType
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserStateProvider;