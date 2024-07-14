const axios = require("axios");

const sendFromZapier = async (invoice) =>{
    const zapierURL = process.env.ZAPIER_URL;
    try {
        const response = await axios.post(zapierURL, invoice);
        return response.status;
    } catch (error) {
        throw error;
    }    
}

module.exports = { sendFromZapier };