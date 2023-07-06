import * as ClassroomConnection from '../connection/classroomConnection.js';
import { v4 as uuidv4 } from 'uuid';


export function GetEmptyDesks(specs) {
    console.log(specs);
    let result = [];
    for (let i = 0; i < specs.rows; i++) {
        result[i] = generateDeskRow(specs.columns / specs.deskSize, specs.deskSize)
    }
    result[specs.rows] = generateTeachersDeskRow(specs.columns / specs.deskSize, specs.deskSize, specs.teachersDeskRow);
    console.log(result);
    return result;
}

function generateDeskRow(deskCount, deskSize) {
    let result = [];
    for (let i = 0; i < deskCount; i++) {
        result[i] = generateDesk(deskSize);
    }
    return result;
}

function generateDesk(deskSize) {
    let result = [];
    for (let i = 0; i < deskSize; i++) {
        result[i] = { name: "Empty" }
    }
    return result;
}

function generateTeachersDeskRow(deskCount, deskSize, teachersDeskPosition) {
    console.log(teachersDeskPosition);
    let result = [];
    for (let i = 0; i < deskCount; i++) {
        result[i] = [];
        if (i == teachersDeskPosition - 1) {                        
            result[i][0] = { name: "Katedra", isTeachersDesk: true };
        }
        else{
            for (let j = 0; j < deskSize; j++) {
                result[i][j] = { name: "", isInvisible: true };
            }
        }
    }
    return result;
}

export async function GetDesks() {

}

export function CalculateHeight(rowCount, columnCount) {
    if ((245 - ((175 / 8) * rowCount)) > CalculateWidth(columnCount))
        return CalculateWidth(columnCount);
    else
        return (245 - ((175 / 8) * rowCount));
}

export function CalculateWidth(columnCount) {
    return (415 - ((300 / 12) * columnCount));
}


export async function InsertClassroom(classroomSpecs) {
    if (classroomSpecs.name && classroomSpecs.rows && classroomSpecs.columns && classroomSpecs.deskSize) {
        ClassroomConnection.InsertClassroom(classroomSpecs);
    }
    else return "ERROR: Missing specifications."
}

