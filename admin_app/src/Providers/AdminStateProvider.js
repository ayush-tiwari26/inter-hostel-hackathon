import React from 'react'

export const AdminContext = React.createContext()

const AdminStateProvider = ({ children }) => {
    const [adminEmail, setAdminEmail] = React.useState("")
    const [adminToken, setAdminToken] = React.useState("")
    const [adminTickets, setAdminTickets] = React.useState([])
    //TODO admin auth verification
    React.useEffect(() => {
        const demoAdminTickets = [
            {
                title: "Demo Ticket 1",
                description: "Demo Description 1",
                status: "open",
                messages: [
                    {
                        message: "Demo Message 1",
                        editDisable: true
                    },
                    {
                        message: "Demo Message 2",
                        editDisable: true
                    }
                ]
            },
            {
                title: "Demo Ticket 2",
                description: "Demo Description 2",
                status: "open",
                messages: [
                    {
                        message: "Demo Message 1",
                        editDisable: true
                    },
                    {
                        message: "Demo Message 2",
                        editDisable: true
                    }
                ]
            }
        ]
        setAdminTickets(demoAdminTickets);
    }, [])

    return (
        <AdminContext.Provider value={{ adminEmail, setAdminEmail, adminToken, setAdminToken, adminTickets, setAdminTickets}}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminStateProvider;