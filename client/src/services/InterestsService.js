import Api from "@/services/Api";

export default {
  // send get request to get all interest types
  getInterests() {
    return Api().get("/interests");
  },
  // send get request to get all interests of a single user
  getInterestsByUser(id) {
    return Api().get("/interests/" + id);
  },
  // send post request to add a user interest
  addUserInterest(data) {
    return Api().post("/interests", data);
  },
  // send delete request to delete a user interest
  deleteUserInterest(userID, interestID) {
    return Api().delete(`/interests/${userID}/${interestID}`);
  }
};
