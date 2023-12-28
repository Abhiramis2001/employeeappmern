// routes/employee.js
const express = require('express');
const router = express.Router();
const { getEmployees, addEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const { authenticateUser, authorizeAdmin } = require('../middleware/auth');

router.get('/', authenticateUser, getEmployees);
router.post('/', authorizeAdmin, addEmployee);
router.put('/:id', authorizeAdmin, updateEmployee);
router.delete('/:id', authorizeAdmin, deleteEmployee);

module.exports = router;
