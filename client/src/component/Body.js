const PickList = ({ type }) => {
    const dispatch = useDispatch()
    let ads = useSelector(state => state.ads)
    console.log(ads)
    console.log(type)

    const [filter, setFilter] = useState("")
    const filterChange = e => {
        setFilter(e.currentTarget.value)
    }
    return (
        <>
            <div className="app-body--section--picklist--filter">
                <label>Filter:</label><input type="text" value={filter} onChange={filterChange}></input>

            </div>
            <div className="app-body--section--picklist">
                <div className="app-body--section--picklist--table">
                    {
                        ads
                            .filter(ad => (ad.type === type && ad.tag.includes(filter)))
                            .map(elem => {
                                return (
                                    <div key={elem.id} className="app-body--section--picklist--table--row">
                                        <div className="app-body--section--picklist--table--row--tag">{elem.tag}</div>
                                        <button className="app-body--section--picklist--table--row--delete">X</button>
                                        <button className="app-body--section--picklist--table--row--check">&#10003;</button>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )
}

const Body = () => {
    const dispatch = useDispatch()
    let ads = useSelector(state => state.ads)
    // const [ads, setAds] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getAll()
            // setWeights(data)
            data ? dispatch(setAds([...data])) : alert('Error loading data, first refresh then reach out to tech.')
        }
        getData()
    }, [dispatch])

    let currUrls = []
    for (let i = 0; i < 3; ++i) {
        currUrls[i] = ads.find(elem => (elem.type === i && elem.current))
    }

    console.log(currUrls)


    if (!ads.length) {
        return (
            <main id="app-body">
                LOADING...
            </main>
        )

    }
    else {
        return (
            <main id="app-body">
                <section className="app-body--section ad-banner">
                    <h1 className="app-body--section--header">
                        Banner Ad
                    </h1>
                    <div className="app-body--section--currimg">
                        <img className="app-body--section--currimg img-fluid" src={currUrls[0].s3url} />
                    </div>
                    <PickList type={0} />

                </section>
                <section className="app-body--section ad-mid">
                    <h1 className="app-body--section--header">
                        Mid Size Ad (300x250)
                    </h1>
                    <div className="app-body--section--currimg">
                        <img className="app-body--section--currimg img-fluid" src={currUrls[1].s3url} />
                    </div>
                    <PickList type={1} />

                </section>
                <section className="app-body--section ad-long">
                    <h1 className="app-body--section--header">
                        Long Ad (300x600)
                    </h1>
                    <div className="app-body--section--currimg">
                        <img className="app-body--section--currimg img-fluid" src={currUrls[2].s3url} />
                    </div>
                    <PickList type={2} />

                </section>
            </main>
        )
    }
}

