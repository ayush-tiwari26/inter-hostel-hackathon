import React from 'react'

export const AdminContext = React.createContext()

const AdminStateProvider = ({ children }) => {
    const [adminEmail, setAdminEmail] = React.useState("")
    const [adminToken, setAdminToken] = React.useState("")
    const [adminTickets, setAdminTickets] = React.useState([])
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState(false);
    const [snackbarType, setSnackbarType] = React.useState("success");

    return (
        <AdminContext.Provider value={{
            adminEmail,
            setAdminEmail,
            adminToken,
            setAdminToken,
            adminTickets,
            setAdminTickets,
            openSnackbar,
            setOpenSnackbar,
            snackbarMessage,
            setSnackbarMessage,
            snackbarType,
            setSnackbarType
        }}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminStateProvider;