import Api from "@/services/Api";

export default {
  // send get request to get participants of single event
  getParticipants(id) {
    return Api().get("/participants/" + id);
  },
  // send post request to add a partcipant to an event
  addParticipants(data) {
    return Api().post("/participants", data);
  },
  // send delete request to delete a partcipant of an event
  deleteParticipants(eventID, userID) {
    return Api().delete(`/participants/${eventID}/${userID}`);
  }
};
