const Ads = require('../models/ads')

const makeNoneOfTypeCurrent = async (type) => {
    console.log('makeNoneOfTypeCurrent')
    console.log(type)
    const results = await Ads.find({ current: 1, type: type })
    console.log(results)
    results.forEach(ad => {
        ad.current = 0
        ad.save()
    })
}

module.exports = {
    makeNoneOfTypeCurrent
}