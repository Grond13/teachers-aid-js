import * as mainTimetableConnection from '../connection/mainTimetableConnection.js';

const startTimes = ["08:00:00", "08:55:00", "10:00:00", "10:55:00", "11:50:00", "12:45:00", "13:40:00", "14:35:00", "15:30:00"];

export async function GetTimetable() {
    const raw = await mainTimetableConnection.GetTimetable();
    
    var classes = JSON.parse(raw);
    //console.log(raw);
    var days = {
        Monday: getClasses(classes.filter(element => element['day'] == 'monday'), 'monday'),
        Tuesday: getClasses(classes.filter(element => element['day'] == 'tuesday'), 'tuesday'),
        Wednesday: getClasses(classes.filter(element => element['day'] == 'wednesday'), 'wednesday'),
        Thursday: getClasses(classes.filter(element => element['day'] == 'thursday'), 'thursday'),
        Friday: getClasses(classes.filter(element => element['day'] == 'friday'), 'friday')
    };
    const rows = [];
    for (const day in days) {
        const classes = [];
        for (const time in days[day]) {
            classes.push(days[day][time] || null);
        }
        rows.push({ day, classes });
    }
    //console.log(rows);
    return rows;
}

function getClasses(items, day) {
    const result = {};
    for (let i = 0; i < startTimes.length; i++) {
        const startTime = startTimes[i];
        const item = items.find(item => item.start === startTime) || { };                
        if(item.day == null){
            item.day = day;
        }
        if(item.start == null){
            item.start = startTime;
        }
        if (item.end == null) {     
            const startDatetime = new Date();
            const [hours, minutes, seconds] = startTime.split(':');
            startDatetime.setHours(hours);
            startDatetime.setMinutes(minutes);
            startDatetime.setSeconds(seconds);
            const endDatetime = new Date(startDatetime.getTime() + 45 * 60000);
            item.end = endDatetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });            
        }
        
        result[startTime] = item || null;
    }
    return result;
}

function updateClass(updatedClass){
    this.mainTimetableConnection.updateClass(updatedClass);
}