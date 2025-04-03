class NasaController {

    constructor(axios) {
      this.axios = axios;
      this.nasa = 'https://jsonplaceholder.typicode.com/posts'
    }
    async accessData(req, res,) {
      const response = await this.axios.get(`${this.nasa}/${req.query.post}`)
      res.json(this.tractResponseData(response));
    }

    tractResponseData(response) {
      const {title, body} = response.data

      return {
        titulo:title,
        informacao:body
      }
    }
  }
  
  module.exports = NasaController;