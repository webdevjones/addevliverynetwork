import React from 'react'
// import React, { useEffect, useState } from 'react'
import AdForm from './AdForm'
import Nav from './Nav'
import Dashboard from './Dashboard'
// import { getAll } from '../utils/requests'
import { useSelector } from 'react-redux'
// import { setAds } from '../reducers/adReducer'




// {/* <AdForm /> */ }
const App = () => {
    // const dispatch = useDispatch()
    let route = useSelector(state => state.route)
    return (
        <>
            <div id="app-wrapper">
                <Nav />
                {
                    route === 0
                        ? <Dashboard />
                        : false
                }
                {
                    route === 1
                        ? <AdForm />
                        : false
                }
            </div>
        </>
    )
}

export default App;