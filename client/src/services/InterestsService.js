import Api from "@/services/Api";

export default {
  getInterests() {
    return Api().get("/interests/");
  }
};
