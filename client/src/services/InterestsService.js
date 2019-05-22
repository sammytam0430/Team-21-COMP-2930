import Api from "@/services/Api";

export default {
  getInterests() {
    return Api().get("/interests");
  },
  getInterestsByUser(id) {
    return Api().get("/interests/" + id);
  },
  addUserInterest(data) {
    return Api().post("/interests", data);
  },
  deleteUserInterest(userID, interestID) {
    return Api().delete(`/interests/${userID}/${interestID}`);
  }
};
