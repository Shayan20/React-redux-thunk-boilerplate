import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";
var client = axios.create({
  baseURL: URL
});

class WebService {
  getData() {
    return client.get("/posts");
  }

  getOnePost(id){
     return client.get(`/posts/${id}`)
  }
}

const webservice = new WebService();
export default webservice;
