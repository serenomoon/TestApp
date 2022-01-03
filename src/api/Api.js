import axios from 'axios'

// Api calls
class OperationsService{

  async getNationality(input) {
      try {
            const {data} = await axios.get(`https://api.nationalize.io?name=${input}`);
            return data;
        } catch (e) {
          alert("Oops something went wrong, try again.");
        }       
  }

  async getGender(input) {
    try {
          const {data} = await axios.get(`https://api.genderize.io?name=${input}`);
          return data;
      } catch (e) {
        alert("Oops something went wrong, try again.");
      }       
  }

  async getAge(input) {
    try {
          const {data} = await axios.get(`https://api.agify.io?name=${input}`);
          return data;
      } catch (e) {
        alert("Oops something went wrong, try again.");
      }       
  }
}


export default OperationsService;


