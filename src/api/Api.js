import axios from 'axios'


class OperationsService{

  async getNationality(input) {
      try {
            const {data} = await axios.get(`https://gender-api.com/get?name=${input}`);
            return data;
        } catch (e) {
          alert("I think that name doesn't exist, right?");
        }       
  }

  async getGender(input) {
    try {
          const {data} = await axios.get(`https://api.genderize.io/?name=${input}`);
          return data;
      } catch (e) {
        alert("I think that name doesn't exist, right?");
      }       
  }

  async getAge(input) {
    try {
          const {data} = await axios.get(`https://api.agify.io/?name=${input}`);
          return data;
      } catch (e) {
        alert("I think that name doesn't exist, right?");
      }       
  }
}


export default OperationsService;


