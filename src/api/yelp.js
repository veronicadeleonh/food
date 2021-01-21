import axios from "axios"

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer NEJ6sWQ2Ov3x6J9dTMuNJZGewCj8P6B_mQQmGMeOwWuS3Rb14V3wxiHLkqdyFuYRXeUJb5ECoYVbFBEgmVSAADdnzcxpUVtq4xjKP5wdF3azWPvAV4Dw4YelGZn9X3Yx"
    }
})