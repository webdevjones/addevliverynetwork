import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRoute } from '../reducers/routeReducer'

const Nav = () => {
    // const handleClick = e => {
    //     e.preventDefault()
    //     let adForm = document.getElementById('adForm--wrapper')
    //     adForm.classList.add('open')
    // }

    const dispatch = useDispatch()
    let route = useSelector(state => state.route)


    const navChange = (e, index) => {
        console.log(index)
        dispatch(setRoute(index))
    }
    return (
        <nav id="app-nav">
            <div className="container">
                <img className="app-nav--logo" src="/static/ADN.svg" alt="MRC ADN Logo" />
                <div className="app-nav--tabs">
                    <button onClick={e => navChange(e, 0)} className={route === 0 ? "app-nav--tabs--tab active" : "app-nav--tabs--tab"}>
                        <div className="app-nav--tabs--tab--text">
                            Dashboard
                        </div>
                    </button>
                    <button onClick={e => navChange(e, 1)} className={route === 1 ? "app-nav--tabs--tab active" : "app-nav--tabs--tab"}>
                        <div className="app-nav--tabs--tab--text">
                            New Campaign
                        </div>
                    </button>
                </div>
                <div className="app-nav--title">
                    <div className="app-nav--title--wrapper">
                        <div className="app-nav--title--main">
                            MRC
                    </div>
                        <div className="app-nav--title--sub">
                            <div className="app-nav--title--sub--text">
                                Ad Delivery Network
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav
