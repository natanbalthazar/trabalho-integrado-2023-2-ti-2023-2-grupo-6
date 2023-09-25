import axios from "axios";

const API_URL = "http://localhost:3000";

const getTeachers = async () => {
  return await axios.get(API_URL + `/teachers?_expand=user`);
};

const getTeachersDetails = async (id) => {
  return await axios.get(API_URL + `/teachers/${id}?_expand=user`);
};

const updateTeacher = async (teacher) => {
  const { id, specialization, resume, description } = teacher; // Extrai as propriedades relevantes

  if (!id) {
    throw new Error("ID do professor não especificado.");
  }

  const updatedTeacher = {
    specialization,
    resume,
    description,
  };

  return await axios.patch(API_URL + `/teachers/${id}`, updatedTeacher);
};

export const createTeacher = async (teacher) => {
  return await axios.post(API_URL + `/teachers`, teacher);
};

const updateAvailableHours = async (id, newAvailability) => {
  const response = await axios.get(API_URL + `/teachers/${id}`);

  if (response.data) {
    const teacherData = {
      ...response.data, // Mantém os dados existentes do professor
    };

    // Verifica se o novo horário já existe na lista de horários disponíveis
    if (!teacherData.availableHours.includes(newAvailability)) {
      teacherData.availableHours.push(newAvailability);
      await updateTeacher(id, teacherData);
    } else {
      // Se o horário já existe, você pode lançar um erro ou tratar de acordo com a sua lógica
      throw new Error("Horário já existe na lista de disponibilidade.");
    }
  }
};

const createFullTeacher = async (teacher) => {
  return await axios.post(API_URL + `/teachers/full`, teacher);
};

const deleteTeacher = async (id) => {
  return await axios.delete(API_URL + `/teachers/${id}`);
};

const teacherService = {
  getTeachers,
  getTeachersDetails,
  updateTeacher,
  updateAvailableHours,
  createFullTeacher,
  deleteTeacher,
};

export default teacherService;
