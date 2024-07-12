const axios = require("axios")

const PEXELS_API_KEY = 'IsyW5IhaINNC8EgKyxGbMPXQdsiJGBUXxVmBceLPTEuXYJ4COojKTJQM';

const dataBaseSeeds = 36

const pictureSeedsNumber = 80

const getImage = async () => {
    try {
        const response = await axios.get(`https://api.pexels.com/v1/search?query=restaurant&per_page=${pictureSeedsNumber}`, {
            headers: {
                Authorization: PEXELS_API_KEY
            }
        })

        let imageUrls = []
        const resArray = response.data.photos

        for (let i = 0; i < resArray.length; i++) {
            imageUrls.push(resArray[i].src.original)
        }

        return imageUrls

    } catch (error) {
        console.error(error);
    }
}

module.exports = getImage



