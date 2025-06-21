import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/training-programs";

const  getTrainingPrograms = () => axios.get(API_URL);

const getTrainingProgramById = (id) => axios.get(`${API_URL}/${id}`);

const createTrainingProgram = (program) => axios.post(API_URL, program);

const updateTrainingProgram = (id, program) => axios.put(`${API_URL}/${id}`, program);

const deleteTrainingProgram = (id) => axios.delete(`${API_URL}/${id}`);

export { getTrainingPrograms, getTrainingProgramById, createTrainingProgram, updateTrainingProgram, deleteTrainingProgram };