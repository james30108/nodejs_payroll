import http from "../http_common";
class Department {
  getAll(params) {
    return http.get("/department", { params });
  }
  get(id) {
    return http.get(`/department/${id}`);
  }
  create(data) {
    return http.post("/department", data);
  }
  update(id, data) {
    return http.put(`/department/${id}`, data);
  }
  delete(id) {
    return http.delete(`/department/${id}`);
  }
}
export default new Department();