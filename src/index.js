const axios = require('axios')
const greet= name => 'Hello, world!' + name;

const users= async () => {
    const data= await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
    return data.data
}

module.exports={
    users,
    greet
}