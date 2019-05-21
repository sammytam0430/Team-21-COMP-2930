import Api from "@/services/Api";

export default {
  authenticateUser(data) {
    return Api().post("/login", data);
  },
  getUser(id) {
    return Api().get("/users/" + id);
  },

  getUserByEmail(email) {
    return Api().post("/users/" + email);
  },

  createUser(data) {
    return Api().post("/users", data);
  },
  updateUser(id, data) {
    return Api().patch("/users/" + id, data);
  },
  deleteUser(id) {
    return Api().delete("/users/" + id);
  }
};
