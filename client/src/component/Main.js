import React from 'react'
// import React, { useEffect, useState } from 'react'
import AdForm from './AdForm'
import Nav from './Nav'
import Dashboard from './Dashboard'
// import { checkPass } from '../utils/requests'
import { useSelector } from 'react-redux'
// import { setAds } from '../reducers/adReducer'



// {/* <AdForm /> */ }
const Main = () => {
    // const dispatch = useDispatch()
    // console.log("env pass: ", )

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

export default Main;