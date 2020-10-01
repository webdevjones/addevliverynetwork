const adsRouter = require('express').Router()
const Ads = require('../models/ads')
const utils = require('../utils/utilFunctions')
// const logger = require('../utils/logger')
const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')
// const config = require('../utils/config')
const path = require('path')


//configure the keys for accessing AWS

AWS.config.update({
    // accessKeyId: config.AWS_ACCESS_KEY_ID,
    // secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'us-east-1'
})
const s3 = new AWS.S3()
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'mrc7',
        // Set public read permissions
        acl: 'public-read',
        // Auto detect contet type
        contentType: multerS3.AUTO_CONTENT_TYPE,
        // Set key/ filename as original uploaded name
        key: function (req, file, cb) {
            // console.log(path.normalize())
            cb(null, `mrcad-${file.originalname}-${Date.now()}${path.extname(file.originalname)}`)
        }
    })
})


adsRouter.get('/', async (req, res) => {
    const ads = await Ads.find({})
    res.json(ads.map(ad => ad.toJSON()))
})
adsRouter.get('/current/:type', async (req, res) => {
    const type = req.params.type
    const ads = await Ads.find({ type: type, current: 1 })
    res.json(ads.map(ad => ad.toJSON()))
})

adsRouter.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    const result = await Ads.deleteOne({ _id: id })
    result.deletedCount
        ? res
            .status(204)
            .send('deleted')
        : res
            .status(400)
            .json({ error: 'deletion error' })

})
adsRouter.post('/current/:id', async (req, res) => {
    const id = req.params.id
    const ad = await Ads.findById(id)
    await utils.makeNoneOfTypeCurrent(ad.type)
    ad.current = 1
    ad.save()
    console.log(ad)
    // console.log(result)
    res.status(200).json(ad.toJSON())
})

adsRouter.post('/add/:type', upload.single('file'), async (req, res) => {

    const type = Number(req.params.type)
    if (type >= 3 || type < 0) {
        res
            .status(400)
            .send('Unknown type')
        return
    }
    const s3url = req.file ? req.file.location : ''
    const body = req.body
    await utils.makeNoneOfTypeCurrent(type)

    const newAd = new Ads({
        tag: body.tag,
        type: type,
        s3url: s3url,
        current: 1,
        link: body.link
    })

    const result = await newAd.save()
    res.status(201).json(result.toJSON())
})



















// adsRouter.get('/', async (req, res) => {
//     const dailys = await Daily.find({})
//     res.json(dailys.map(d => d.toJSON()))
// })

// adsRouter.post('/', upload.single('file'), async (req, res, next) => {
//     const s3url = req.file ? req.file.location : ''
//     const body = req.body
//     const weight = Number(body.weight)
//     if (typeof (weight) !== 'number') {
//         // logger.error(`${weight} is NaN`)
//         res.status(400).json({ 'error': 'Weight must be a number' })
//         return
//     }
//     const date = new Date()
//     const formattedDate = date.toLocaleDateString()
//     // logger.info(`formattedDate ${formattedDate}`)

//     const daily = new Daily({
//         Weight: weight,
//         Date: formattedDate,
//         s3url: s3url
//     })

//     const result = await daily.save()

//     res.status(201).json(result.toJSON())

// })
// const path = files.file[0].path;
// const buffer = fs.readFileSync(path);
// const type = fileType(buffer);
// const timestamp = Date.now().toString();
// const fileName = `bucketFolder/${timestamp}-lg`;
// const data = await uploadFile(buffer, fileName, type);
// return res.status(200).send(data)

module.exports = adsRouter
