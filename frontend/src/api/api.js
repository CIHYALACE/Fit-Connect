import axios from "axios";

const Programs_URL = "http://127.0.0.1:8000/api/training_programs/";
const Trainers_URL = "http://127.0.0.1:8000/api/trainers_list/";

// ! For Training Programs Endpoint
const getTrainingPrograms = () => axios.get(Programs_URL);
const getTrainingProgramById = (id) => axios.get(`${Programs_URL}/${id}`);
const createTrainingProgram = (program) => axios.post(Programs_URL, program);
const updateTrainingProgram = (id, program) => axios.put(`${Programs_URL}/${id}`, program);
const deleteTrainingProgram = (id) => axios.delete(`${Programs_URL}/${id}`);

// ! For Trainers Endpoint
const getTrainersList = () => axios.get(Trainers_URL);
const getTrainerById = (id) => axios.get(`${Trainers_URL}/${id}`);
const createNewTrainer = (Trainer) => axios.post(Trainers_URL, Trainer);
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
