import React from 'react'

export const UserContext = React.createContext()

const UserStateProvider = ({ children }) => {
    const [userEmail, setUserEmail] = React.useState("")
    const [userToken, setUserToken] = React.useState("")
    const [userTickets, setUserTickets] = React.useState([])
    //TODO user auth verification
    React.useEffect(() => {
        const demoUserTickets = [
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
        setUserTickets(demoUserTickets);
    }, [])
    return (
        <UserContext.Provider value={{ userEmail, setUserEmail, userToken, setUserToken, userTickets, setUserTickets}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserStateProvider;