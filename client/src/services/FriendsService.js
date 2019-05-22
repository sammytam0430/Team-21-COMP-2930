import Api from "@/services/Api";

export default {
  // send get request to get all friends of a user
  getFriends(id) {
    return Api().get("/friends/" + id);
  },
  // send get request to get user and friend pair
  getFriend(userID, friendID) {
    return Api().get(`/friends/${userID}/${friendID}`);
  },
  // send post request to create user and friend pair
  addFriend(data) {
    return Api().post("/friends", data);
  },
  // send delete request to delete user and friend pare
  deleteFriend(userID, friendID) {
    return Api().delete(`/friends/${userID}/${friendID}`);
  }
};
