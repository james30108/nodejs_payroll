import http from "../http_common";
class Employee {
  getAll() {
    return http.get("/employee");
  }
  get(id) {
    return http.get(`/employee/${id}`);
  }
  create(data) {
    return http.post("/employee", data);
  }
  edit(id) {
    return http.post("/employee/edit/", id);
  }
  update(id, data) {
    return http.put(`/employee/${id}`, data);
  }
  delete(id) {
    return http.delete(`/employee/${id}`);
  }
  deleteAll() {
    return http.delete(`/employee`);
  }
  findByTitle(title) {
    return http.get(`/employee?title=${title}`);
  }
}
export default new Employee();