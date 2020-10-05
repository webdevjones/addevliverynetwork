import React, { useState } from 'react'
import Main from './Main'
import Login from './Login'

const App = () => {
    const [login, setLogin] = useState(0)

    return (
        <>
            {
                login ? <Main /> : <Login setLogin={setLogin} />
            }
        </>
    )

}

export default App;