// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
});

export const login = async (userData) => {
  // Implement login API call
};

export const getEmployees = async () => {
  // Implement get employees API call
};

export const addEmployee = async (employeeData) => {
  // Implement add employee API call
};

export const updateEmployee = async (employeeId, employeeData) => {
  // Implement update employee API call
};

export const deleteEmployee = async (employeeId) => {
  // Implement delete employee API call
};
