import axios from "axios"

 async function getData(number){
  
const {data:usersData} = await axios("https://jsonplaceholder.typicode.com/users/" + number)
const {data:postsData} = await axios ("https://jsonplaceholder.typicode.com/posts/" + number)



console.log("User:",usersData)
console.log("Post:",postsData)



}

export default getData;