import http from "../http-common";


// TODO: RENAME  Tutorial to smth better
class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    console.warn(111, data)
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }
}

export default new TutorialDataService();
