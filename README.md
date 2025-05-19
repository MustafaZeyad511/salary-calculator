# Salary Calculator

A full-stack application for calculating employee salaries based on hours worked and hourly rates stored in a PostgreSQL database.

## Features

- Employee selection from database
- Automatic hourly rate retrieval
- Calculation of gross salary based on hours worked
- Calculation of deductions (Contingencies, Training, Unemployment, IRPF Tax)
- Display of net salary after deductions
- Print functionality for salary slips

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: PostgreSQL

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Configure the database connection in `.env` file
4. Start the server:
   ```
   npm start
   ```
5. Access the application at `http://localhost:3000`

## Database Schema

The application uses two main tables:

### employees
- id (Primary Key)
- employee_name
- hourly_rate

### salary_logs
- id (Primary Key)
- employee_id (Foreign Key)
- printed_date
- gross_salary
- contingencies
- training
- unemployment
- irpf_tax
- total_deductions
- net_salary

## API Endpoints

- `GET /api/employees` - Retrieves all employees with their hourly rates
