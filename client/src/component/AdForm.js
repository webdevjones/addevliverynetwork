import React, { useState } from 'react'
import { addAd } from '../utils/requests'
import { useDispatch } from 'react-redux'
import { noCurrByType, addAdStore } from '../reducers/adReducer'

// var util = require('util')

const AdForm = () => {
    const dispatch = useDispatch()
    // let ads = useSelector(state => state.ads)

    const [tags, setTags] = useState(["", "", ""])
    const [links, setLinks] = useState(["", "", ""])
    const [err, setErr] = useState([0, 0, 0])
    const [images, setImages] = useState([null, null, null])

    const resetFields = () => {
        setTags(["", "", ""])
        setLinks(["", "", ""])
        setErr([0, 0, 0])
        setImages([null, null, null])
    }

    const changeTag = (e, index) => {
        const tempTags = tags
        tempTags[index] = e.currentTarget.value
        setTags([...tempTags])
    }
    const changeLink = (e, index) => {
        const tempLinks = links
        tempLinks[index] = e.currentTarget.value
        setLinks([...tempLinks])
    }
    const handleFileUpload = (e, index) => {
        const tempImgs = images
        tempImgs[index] = e.target.files
        setImages([...tempImgs])
    }
    const removeErrors = () => {
        setErr([0, 0, 0])
    }

    const uploadBtnStuff = () => {
        const btn = document.getElementById('file-upload')
        if (!btn.classList.contains('uploading')) {
            btn.innerText = "Uploading..."
            btn.classList.add('uploading')
        }
    }

    const resetBtn = () => {
        const btn = document.getElementById('file-upload')
        btn.innerText = "Upload"
        btn.classList.remove('uploading')
    }

    const handleSubmit = async (e) => {
        // e.persist()
        e.preventDefault()

        removeErrors()

        //first lets loop thru and see if there are any failures
        for (let i = 0; i < 3; ++i) {
            //BANG BANG to standardize the variables
            let decision = !!tags[i].length + !!links[i].length + !!images[i]
            //none of the fields are filled out so who really cares anyway
            if (!decision) {
                continue
            }

            //if some, but not all of the fields are filled out... raise hell
            else if (decision < 3) {
                const tempErr = err
                tempErr[i] = 1
                setErr([...tempErr])
            }

        }

        //lets see if we got any errors...
        if (err.includes(1)) {
            return
        }

        for (let i = 0; i < 3; ++i) {
            //BANG BANG to standardize the variables
            let decision = !!tags[i].length + !!links[i].length + !!images[i]


            //guess they actually want to submit something!
            if (decision === 3) {
                //here we can do the real fun
                uploadBtnStuff()
                const Data = new FormData();
                Data.append('tag', tags[i])
                Data.append('link', links[i])
                Data.append('file', images[i][0])

                const res = await addAd(Data, i)
                if (res.status !== 201) {
                    alert('error of some kind')
                    return
                }
                dispatch(noCurrByType(res.data.type))
                dispatch(addAdStore(res.data))
                // const resCurr = await setCurr(res.data.id)
                // if (resCurr.status !== 200) {
                //     alert('error of some kind')
                //     return
                // }



            }
        }
        resetFields()
        resetBtn()
        closeModal()

    }
    const closeModal = () => {
        let adForm = document.getElementById('adForm--wrapper')
        adForm.classList.remove('open')
    }
    // const handleClose = e => {
    //     e.preventDefault()
    //     closeModal()
    // }

    return (
        <div id="adForm--wrapper">
            <div id="adForm">
                <form>
                    <div className="form-wrapper">
                        {["Banner Ad", "Mid Ad", "Long Ad"].map((label, index) => {
                            return (
                                <div className={`form-section ${label}`} key={index}>
                                    <div className="form-section--header">{label}</div>
                                    {
                                        err[index]
                                            ? <div className="form-section--error">Please fill all of the fields.</div>
                                            : false
                                    }
                                    <div className="form-section--fields">
                                        <div className="form-section--fields--field">
                                            <label>Tag:</label><input type="text" value={tags[index]} onChange={e => changeTag(e, index)}></input>
                                        </div>
                                        <div className="form-section--fields--field">
                                            <label>Link:</label><input type="text" value={links[index]} onChange={e => changeLink(e, index)}></input>
                                        </div>
                                        <div className="form-section--fields--field">
                                            <label>Image:</label><input type="file" id="file-upload" onChange={e => handleFileUpload(e, index)}></input>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className="form-submit" type="submit" onClick={handleSubmit}>Upload</button>
                </form>
                {/* <button onClick={handleClose} className="adForm--close">X</button> */}
            </div>
        </div>
    )
}

export default AdForm