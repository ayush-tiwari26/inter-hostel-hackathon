import React from 'react'

const UserContext = React.createContext()

const UserStateProvider = ({ children }) => {
    const [userEmail, setUserEmail] = React.useState("")
    const [userToken, setUserToken] = React.useState("")
    const [userComplains, setUserComplains] = React.useState([])
    //TODO user aith verification
    return (
        <UserContext.Provider value={{ userEmail, setUserEmail, userToken, setUserToken, userComplains, setUserComplains }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserStateProvider;