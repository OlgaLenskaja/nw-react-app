import Axios from 'axios'
const baseUrl = "https://localhost:5001/api/customer"

const getAll = () => {
    const request = Axios.get(baseUrl)
    return request.then(response => response.data)
}
const create = newCustomer => {
    return Axios.post(baseUrl, newCustomer)
}
const remove = id => Axios.delete(`${baseUrl}/${id}`)

export default { getAll, create, remove}