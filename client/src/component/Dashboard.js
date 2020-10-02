import React, { useEffect, useState } from 'react'
import { getAll } from '../utils/requests'
import { useDispatch, useSelector } from 'react-redux'
import { setAds, setCurrId, deleteAd } from '../reducers/adReducer'
import { setCurr, deleteAdOnServer } from '../utils/requests'

const CurrentAd = ({ type }) => {
    let ads = useSelector(state => state.ads)

    // const [ads, setAds] = useState([])

    if (ads.length) {
        let currUrls = []
        for (let i = 0; i < 3; ++i) {
            currUrls[i] = ads.find(elem => (elem.type === i && elem.current))
        }


        let label = ""
        if (type === 0) {
            label = "Banner Ad"
        }
        else if (type === 1) {
            label = "Mid Size Ad (300x250)"
        }
        else if (type === 2) {
            label = "Long Ad (300x600)"
        }
        else {
            //should never get here
        }
        console.log(currUrls)
        return (
            <div className="current--item">
                <div className="current--item--label">{label}</div>
                <div className="current--item--img-container">
                    {
                        typeof currUrls[type] !== 'undefined'
                            ? <a href={currUrls[type].link} target="_blank" rel="noopener noreferrer">
                                <img src={currUrls[type].s3url} alt={label} className="current--item--img-container-img" />
                            </a>
                            : false
                    }

                </div>
            </div>
        )
    }
    else {
        return (
            <div className="current--item--loading">
                Loading...
            </div>
        )
    }
}

const TableSelectionRow = ({ item }) => {
    const [show, setShow] = useState(0)
    const dispatch = useDispatch()

    const handleSelect = async (e, item) => {
        e.preventDefault()
        await setCurr(item.id)
        dispatch(setCurrId(item.id, item.type))
    }
    const handleDelete = async (e, item) => {
        e.preventDefault()
        await deleteAdOnServer(item.id)
        dispatch(deleteAd(item.id))
    }

    const handleOver = (e) => {
        setShow(1)

    }
    const handleLeave = (e) => {
        setShow(0)
    }
    return (
        <div key={item.id} className="table--selection--section--row" >
            <div className="table--grid--item table--selection--section--item table--selection--section--tag" onMouseOver={handleOver} onMouseLeave={handleLeave}>
                {item.tag}
                {
                    show
                        ? <div className="table--selection--section--tag--thumb">
                            <img className="table--selection--section--tag--thumb--img img-fluid" src={item.s3url} alt={item.tag} />
                        </div>
                        : false
                }
            </div>
            <div className="table--grid--item table--selection--section--item table--selection--section--select">
                <button onClick={e => handleSelect(e, item)} className="table--selection--section--select--btn green">&#10003;</button>
            </div>
            <div className="table--grid--item table--selection--section--item table--selection--section--delete">
                <button onClick={e => handleDelete(e, item)} className="table--selection--section--select--btn red">X</button>
            </div>

        </div>
    )
}

const TableSection = ({ type, filter }) => {

    let ads = useSelector(state => state.ads)


    if (ads.length) {
        return (
            <div className="table--selection--section">
                {ads
                    .filter(elem => (elem.type === type && elem.current === 1))
                    .map(item => {
                        return (
                            <div key={item.id} className="table--selection--section--row green">
                                <div className="table--grid--item table--selection--section--item table--selection--section--tag">{item.tag}</div>
                            </div>
                        )
                    })
                }
                {ads
                    .filter(elem => (elem.type === type && elem.tag.toLowerCase().includes(filter.toLowerCase()) && elem.current !== 1))
                    .reverse()
                    .map(item => {
                        return (
                            <TableSelectionRow key={item.id} item={item} />
                        )
                    })
                }
            </div>
        )
    }
    else {
        return (
            <div className="table--loading">
                Loading...
            </div>
        )
    }
}

const TableSelect = () => {
    const [filter, setFilter] = useState("")


    return (
        <div className="table--wrapper">
            <div className="table--header">
                <div className="table--grid--item table--header--item">Banner Ad</div>
                <div className="table--grid--item table--header--item">Select</div>
                <div className="table--grid--item table--header--item">Delete</div>
                <div className="table--grid--item table--header--item">Mid Size Ad (300x250)</div>
                <div className="table--grid--item table--header--item">Select</div>
                <div className="table--grid--item table--header--item">Delete</div>
                <div className="table--grid--item table--header--item">Long Ad (300x600)</div>
                <div className="table--grid--item table--header--item">Select</div>
                <div className="table--grid--item table--header--item">Delete</div>
            </div>
            <div className="table--filter">
                <div className="table--grid--item">
                    <label>Filter:</label><input type="text" value={filter} onChange={e => setFilter(e.currentTarget.value)} />
                </div>
            </div>
            <div className="table--selection">
                <TableSection type={0} filter={filter} />
                <TableSection type={1} filter={filter} />
                <TableSection type={2} filter={filter} />
            </div>
        </div>
    )

}








const Dashboard = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getData = async () => {
            const data = await getAll()
            // setWeights(data)
            data ? dispatch(setAds([...data])) : alert('Error loading data, first refresh then reach out to tech.')
        }
        getData()
    }, [dispatch])

    return (
        <section id="dashboard">
            <div className="grid-container--wrapper">
                <div className="grid-container">
                    <div className="current">
                        <div className="current--wrapper">
                            <CurrentAd type={0} />
                            <CurrentAd type={1} />
                            <CurrentAd type={2} />
                        </div>
                    </div>
                    <div className="table">
                        <TableSelect />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
