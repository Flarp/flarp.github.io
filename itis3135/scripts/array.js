const people = []
const salaries = []

window.onload = _ => {
  document.getElementById('employee_name').focus()
}

function runSalary() {
  addSalary(document.getElementById('employee_name').value, Number(document.getElementById('employee_salary').value))
}

function addSalary(person, salary) {
  if (person === "") {
    alert("Name cannot be empty")
  } else if (isNaN(salary)) {
    alert("Salary must be a number")
  } else {
    people.push(person)
    salaries.push(salary)
    document.getElementById('employee_name').focus()
  }
  document.getElementById("employees").innerHTML = people.map((employee, i) =>
    `<option name="${i}">${employee}</option>`
  )
}

function displayResults() {
  const average = salaries.reduce((prev, curr) => prev + curr)/(salaries.length)
  const highest = salaries.reduce((prev, curr) => prev > curr ? prev : curr)

  document.getElementById("results").innerHTML = `
  <h2>Results</h2>

  <p>Average: ${average}</p>
  <p>Highest: ${highest}</p>
  `
}

function displaySalary() {
  document.getElementById("salaries").innerHTML = `
  <thead>
    <tr>
      <th>Name</th>
      <th>Salary</th>
    </tr>
    </thead>
    <tbody>
    ${salaries.map((salary, i) => `
        <tr>
          <td>${people[i]}</td>
          <td>${salary}</td>
        </tr>
      `).join("")}
    </tbody>

  `
}
