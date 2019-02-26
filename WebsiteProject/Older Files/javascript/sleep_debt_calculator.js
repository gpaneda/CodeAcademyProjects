function getSleepHours(day) {
    day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 7.5;
        case 'friday':
            return 5;
        case 'saturday':
            return 8;
        case 'sunday':
            return 7.5;
    }
}
/*function getSleepHours (day){
	day = day.toLowerCase();
  if(day === 'monday' || day === 'tuesday'||  day === 'wednesday' || day === 'thursday' || day === 'friday'){
  return 6;
} else if(day === 'saturday' || day === 'sunday')	 {
     return 8;     
	}
}*/

function getActualSleepHours() {
    getSleepHours('Monday') +
        getSleepHours('Tuesday') +
        getSleepHours('Wednesday') +
        getSleepHours('Thursday') +
        getSleepHours('Friday') +
        getSleepHours('Saturday') +
        getSleepHours('Sunday')
}

function getIdealHours() {
    let idealHours = 7;
    return idealHours * 7.5;
}

console.log(getActualSleepHours());
//console.log(getIdealHours());