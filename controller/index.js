module.exports = {
    find: (req, res) => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address}&key=AIzaSyA_8m3vV01mZAdSvesbW3G2rkoHLW4WP2s`)
            .then(location => res.json(location)).catch(err => res.status(422).json(err));
    }
}
