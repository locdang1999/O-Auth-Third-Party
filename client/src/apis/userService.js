import axios from "axios";

export const apiGetInfUser = (token) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await axios({
        method: "GET",
        url: "http://localhost:5000/api/user/getInfo",
        headers:{
            token: `Bearer ${token}`
        }
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });