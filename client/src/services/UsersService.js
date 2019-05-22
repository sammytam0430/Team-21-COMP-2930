import Api from "@/services/Api";

export default {
  // send post request to validate user email and password
  authenticateUser(data) {
    return Api().post("/login", data);
  },
  // send get request to get a user by email
  getUser(id) {
    return Api().get("/users/" + id);
  },
  // send post request to get a user by email
  getUserByEmail(email) {
    return Api().post("/users/" + email);
  },
  // send post request to create a new user
  createUser(data) {
    return Api().post("/users", data);
  },
  // send patch request to update a user
  updateUser(id, data) {
    return Api().patch("/users/" + id, data);
  },
  // send delete request to delete a user
  deleteUser(id) {
    return Api().delete("/users/" + id);
  }
};
