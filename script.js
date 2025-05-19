document.addEventListener('DOMContentLoaded', async function() {
  const employeeSelect = document.getElementById('employeeSelect');
  const hoursInput = document.getElementById('hours');
  const rateInput = document.getElementById('rate');
  const grossSalaryDisplay = document.getElementById('grossSalary');
  const contingenciesDisplay = document.getElementById('contingencies');
  const trainingDisplay = document.getElementById('training');
  const unemploymentDisplay = document.getElementById('unemployment');
  const irpfDisplay = document.getElementById('irpf');
  const totalDeductionsDisplay = document.getElementById('totalDeductions');
  const netSalaryDisplay = document.getElementById('netSalary');

  let employeeMap = {};

  async function loadEmployees() {
    try {
      const response = await fetch('/api/employees');
      const employees = await response.json();

      employees.forEach(emp => {
        const option = document.createElement('option');
        option.value = emp.id;
        option.textContent = emp.employee_name;
        employeeSelect.appendChild(option);
        employeeMap[emp.id] = emp;
      });
    } catch (error) {
      console.error('Error loading employees:', error);
    }
  }

  function calculateSalary() {
    const selectedId = employeeSelect.value;
    const hours = parseFloat(hoursInput.value) || 0;
    const emp = employeeMap[selectedId];
    const rate = emp ? parseFloat(emp.hourly_rate) : 0;

    rateInput.value = rate.toFixed(2);
    const grossSalary = hours * rate;

    const contingencies = grossSalary * 0.0483;
    const training = grossSalary * 0.0010;
    const unemployment = grossSalary * 0.0155;
    const irpf = 451.95;
    const totalDeductions = contingencies + training + unemployment + irpf;
    const netSalary = grossSalary - totalDeductions;

    grossSalaryDisplay.textContent = grossSalary.toFixed(2);
    contingenciesDisplay.textContent = contingencies.toFixed(2);
    trainingDisplay.textContent = training.toFixed(2);
    unemploymentDisplay.textContent = unemployment.toFixed(2);
    irpfDisplay.textContent = irpf.toFixed(2);
    totalDeductionsDisplay.textContent = totalDeductions.toFixed(2);
    netSalaryDisplay.textContent = netSalary.toFixed(2);
  }

  employeeSelect.addEventListener('change', calculateSalary);
  hoursInput.addEventListener('input', calculateSalary);

  await loadEmployees();
});
