import * as teachingSessionConnection from '../connection/teachingSessionConnection.js';


export async function getTeachingSession() {
    const raw = await mainTimetableConnection.GetTimetable();
    
    var deskRows = JSON.parse(raw);
    console.log(deskRows);
    
    return rows;
}

