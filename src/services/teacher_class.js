import Api from "./api";

const TeacherClassesService = {
  index: (week_day, subject, time) => Api.get('/classes', { params: {week_day: week_day, subject: subject, time: time} }),
  create: () => Api.post("/classes")
}

export default TeacherClassesService;