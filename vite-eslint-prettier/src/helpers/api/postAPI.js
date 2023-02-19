import { getData } from "./api";
import { posts } from "../constants/postEx";
let endpoint = "";
class PostAPI {
  listPost() {
    endpoint += posts;
    getData(endpoint);
  }
}

export default PostAPI;
