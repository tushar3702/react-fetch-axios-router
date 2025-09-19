import axios from 'axios'

export const getTodos = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return res.data
    } catch (err) {
        console.log(err)
        return []
    }
}