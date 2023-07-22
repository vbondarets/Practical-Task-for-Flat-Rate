import axios from 'axios'

class LAPhil {
    async getEvent (id: string){
        try {
            const resp = await axios.get(`https://my.laphil.com/en/rest-proxy/TXN/Packages/${id}`);
            return resp.data;
        } catch (error: any) {
            return error.response.data;
        }
    }
    async getPrices (id: string){
        try {
            const resp = await axios.get(`https://my.laphil.com/en/rest-proxy/TXN/Packages/${id}/Prices?expandPerformancePriceType=&includeOnlyBasePrice=&modeOfSaleId=26&priceTypeId=&sourceId=30885`);
            return resp.data;
        } catch (error: any) {
            return error.response.data;
        }
    }
    async getSeats (id: string){
        try {
            const resp = await axios.get(`https://my.laphil.com/en/rest-proxy/TXN/Packages/${id}/Seats?constituentId=0&modeOfSaleId=26&packageId=${id}`);
            return resp.data;
        } catch (error: any) {
            return error.response.data;
        }
    }
    async getZones (id: string){
        try {
            const resp = await axios.get(`https://my.laphil.com/en/rest-proxy/TXN/PriceTypes/Details?modeOfSaleId=26&packageId=${id}&sourceId=30885`);
            return resp.data;
        } catch (error: any) {
            return error.response.data;
        }
    }
}
export default new LAPhil ()