import Api from "@/services/Api";

export default {
  getEvents() {
    return Api().get("/events");
  },
  createEvent(data) {
    return Api().post("/events", data);
  },
  updateEvent(id, data) {
    return Api().patch("/events/" + id, data);
  },
  deleteEvent(id) {
    return Api().delete("/events/" + id);
  },
  getEvent(id) {
    return Api().get("/events/" + id);
  }
};
