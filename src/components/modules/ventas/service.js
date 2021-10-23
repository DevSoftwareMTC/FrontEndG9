const axios = require('axios').default;

const baseURL = 'http://localhost:5000'

    const getAllSales = () => {
        return axios.get(`${baseURL}/allventas`);
    }

    const deleteSale = (sale) => {
        return axios.delete(`${baseURL}/ventas/${sale.dni}`)
    }

    const updateSale = (sale, dni) => {
        return axios.put(`${baseURL}/ventas/${dni}`, sale)
    }

    const createSale = (sale) => {
        return axios.post(`${baseURL}/ventas`, sale)
    }

    module.exports = { getAllSales, deleteSale, updateSale, createSale };
