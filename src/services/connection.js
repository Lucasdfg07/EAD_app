import Api from "./api";

const createNewConnection = {
    create: (teacher) => Api.post("connections", { user_id: teacher.id })
}

export default createNewConnection;