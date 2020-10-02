const adn = () => {
    console.log('adn init')
    let banner = document.getElementById('adn_banner')
    if (banner) {
        fetch('https://ads.mrc.org/api/ads/current/0')
            .then(response => response.json())
            .then(data => {
                const ad = data[0]
                let link = document.createElement('a')
                link.setAttribute('href', ad.link)
                link.setAttribute('target', '_blank')
                let img = document.createElement('img')
                img.setAttribute('src', ad.s3url)
                img.setAttribute('alt', ad.tag)
                link.appendChild(img)
                banner.appendChild(link)

            })
            .catch(err => console.error(err))
    }
    let mid = document.getElementById('adn_mid')
    if (mid) {
        fetch('https://ads.mrc.org/api/ads/current/1')
            .then(response => response.json())
            .then(data => {
                const ad = data[0]
                let link = document.createElement('a')
                link.setAttribute('href', ad.link)
                link.setAttribute('target', '_blank')
                let img = document.createElement('img')
                img.setAttribute('src', ad.s3url)
                img.setAttribute('alt', ad.tag)
                link.appendChild(img)
                mid.appendChild(link)

            })
            .catch(err => console.error(err))
    }
    let long = document.getElementById('adn_long')
    if (long) {
        fetch('https://ads.mrc.org/api/ads/current/2')
            .then(response => response.json())
            .then(data => {
                const ad = data[0]
                let link = document.createElement('a')
                link.setAttribute('href', ad.link)
                link.setAttribute('target', '_blank')
                let img = document.createElement('img')
                img.setAttribute('src', ad.s3url)
                img.setAttribute('alt', ad.tag)
                link.appendChild(img)
                long.appendChild(link)

            })
            .catch(err => console.error(err))
    }
}
adn()