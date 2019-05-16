import Api from "@/services/Api";

export default {
  getFriends(id) {
    return Api().get("/friends/" + id);
  },
  getFriend(userID, friendID) {
    return Api().get(`/friends/${userID}/${friendID}`);
  },
  addFriend(data) {
    return Api().post("/friends", data);
  },
  deleteFriend(userID, friendID) {
    return Api().delete(`/friends/${userID}/${friendID}`);
  }
};
