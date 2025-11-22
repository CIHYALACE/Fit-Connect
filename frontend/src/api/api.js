import axios from "axios";

// if the cloude url is not working use the local url
const API_Cloude_URL = "https://fit-connect-79v3.onrender.com/";
const API_BASE_URL = API_Cloude_URL ? `${API_Cloude_URL}api` : `http://127.0.0.1:8000/api`;
const Programs_URL = `${API_BASE_URL}/training_programs/`;
const Trainers_URL = `${API_BASE_URL}/trainers_list/`;
const Register_URL = `${API_BASE_URL}/register/`;

// ! For Training Programs Endpoint
const getTrainingPrograms = () => axios.get(Programs_URL);
const getTrainingProgramById = (id) => axios.get(`${Programs_URL}/${id}`);
const createTrainingProgram = (program) => axios.post(Programs_URL, program);
const updateTrainingProgram = (id, program) => axios.put(`${Programs_URL}/${id}`, program);
const deleteTrainingProgram = (id) => axios.delete(`${Programs_URL}/${id}`);

// ! For Trainers Endpoint
const getTrainersList = () => axios.get(Trainers_URL);
const getTrainerById = (id) => axios.get(`${Trainers_URL}/${id}`);
const createNewTrainer = (userData) => axios.post(Register_URL, userData);
const updateTrainerData = (id, Trainer) => axios.put(`${Trainers_URL}/${id}`, Trainer);
const deleteCouach = (id) => axios.delete(`${Trainers_URL}/${id}`);

export {
  getTrainingPrograms,
  getTrainingProgramById,
  createTrainingProgram,
  updateTrainingProgram,
  deleteTrainingProgram,
  //!
  getTrainersList,
  getTrainerById,
  createNewTrainer,
  updateTrainerData,
  deleteCouach,
};
