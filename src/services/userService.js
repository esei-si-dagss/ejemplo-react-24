import api from "./jsonplaceholderAPI";

class UserService {
  buscarTodos() {
    return api.get("/users");
  }

  buscarPorId(id) {
    return api.get(`/users/${id}`);
  }
}

const service = new UserService();
export default service