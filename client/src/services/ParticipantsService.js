import Api from "@/services/Api";

export default {
  getParticipants(id) {
    return Api().get("/participants/" + id);
  },
  addParticipants(data) {
    return Api().post("/participants", data);
  },
  deleteEvent(id) {
    return Api().delete("/participants/" + id);
  }
};