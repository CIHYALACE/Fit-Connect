import axios from "axios";

const Programs_URL = "http://127.0.0.1:8000/api/training_programs/";
const Coaches_URL = "http://127.0.0.1:8000/api/coaches_list/";

// ! For Training Programs Endpoint
const getTrainingPrograms = () => axios.get(Programs_URL);
const getTrainingProgramById = (id) => axios.get(`${Programs_URL}/${id}`);
const createTrainingProgram = (program) => axios.post(Programs_URL, program);
const updateTrainingProgram = (id, program) => axios.put(`${Programs_URL}/${id}`, program);
const deleteTrainingProgram = (id) => axios.delete(`${Programs_URL}/${id}`);

// ! For Coaches Endpoint
const getCoachesList = () => axios.get(Coaches_URL);
const getCoachById = (id) => axios.get(`${Coaches_URL}/${id}`);
const createNewCoach = (coach) => axios.post(Coaches_URL, coach);
const updateCoachData = (id, coach) => axios.put(`${Coaches_URL}/${id}`, coach);
const deleteCouach = (id) => axios.delete(`${Coaches_URL}/${id}`);

export {
  getTrainingPrograms,
  getTrainingProgramById,
  createTrainingProgram,
  updateTrainingProgram,
  deleteTrainingProgram,
  //!
  getCoachesList,
  getCoachById,
  createNewCoach,
  updateCoachData,
  deleteCouach,
};
