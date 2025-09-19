export const getPosts = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}