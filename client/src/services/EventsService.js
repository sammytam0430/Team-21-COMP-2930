import Api from "@/services/Api";

export default {
  // send get request to get events
  getEvents() {
    return Api().get("/events");
  },
  // send post request to create new event
  createEvent(data) {
    return Api().post("/events", data);
  },
  // send patch request to update event
  updateEvent(id, data) {
    return Api().patch("/events/" + id, data);
  },
  // send delete request to delete event
  deleteEvent(id) {
    return Api().delete("/events/" + id);
  },
  // send get request to get single event
  getEvent(id) {
    return Api().get("/events/" + id);
  }
};
