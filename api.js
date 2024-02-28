import axios from 'axios';

const fetchUser = async (user) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://dummyapi.online/api/movies/${user}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


// ***************************************************post method****************************************************//

const postUser= async (userObj)=>{
    return new Promise ((resolve, reject)=>{
        axios.post('https://dummyjson.com/products/add',userObj)
        .then((response)=>{
            resolve(response);
        })
        .catch((error)=>{
            reject(error);
        });
    });
}
export {fetchUser,postUser};
