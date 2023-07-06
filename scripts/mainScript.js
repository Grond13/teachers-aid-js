import * as mainTimetableLogic from '../logic/mainTimetableLogic.js';

var timetableData = await mainTimetableLogic.GetTimetable();

const timetableBody = document.getElementById("timetableBody");

// náhrada v-for
timetableData.forEach((dayData) => {
  const { day, classes } = dayData; // řádek přidán jen pro přehlednost, není počítán
  
  const row = document.createElement("tr");

  const dayCell = document.createElement("td");
  dayCell.textContent = day;
  row.appendChild(dayCell);

  // náhrada v-for
  classes.forEach((classData) => {
    const { name, classroom } = classData; // řádek přidán jen pro přehlednost, není počítán
    
    const classCell = document.createElement("td");
    
    const nameDiv = document.createElement("div");
    nameDiv.textContent = name;
    classCell.appendChild(nameDiv);
    
    const classroomDiv = document.createElement("div");
    classroomDiv.textContent = classroom;
    classCell.appendChild(classroomDiv);
    
    // jednorázová náhrada v-bind
    if (name) {
      classCell.classList.add("non-empty");
    } else {
      classCell.classList.add("empty");
    }

    row.appendChild(classCell);
  });
  
  timetableBody.appendChild(row);
});