import Api from "./api";

const TeacherClassesService = {
  index: (week_day, subject, time) => Api.get('/classes', { params: {week_day: week_day, subject: subject, time: time} }),
  create: (name, avatar, whatsapp, bio, subject, cost, schedule) => Api.post("/classes", { name: name, avatar: avatar, whatsapp: whatsapp, bio: bio, subject: subject, cost: cost, schedule: schedule })
}

export default TeacherClassesService;