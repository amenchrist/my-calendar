import React from 'react'

function Calendar({date}) {

  const newDate = new Date()

  const todaysDate = {
    day: newDate.getDate(),
    month: newDate.getMonth(),
    year: newDate.getFullYear()
  }

  function getDateValues(dateString){
    const dateArray = dateString.split('/').map(e => parseInt(e));

    //Make-shift Validation
    switch(true){
      case dateArray.length !== 3:
        console.log("Incorrect Date values received")
        return todaysDate
      case dateArray.filter(e => e === 0).length > 0:
        console.log("Incorrect Date values received")
        return todaysDate
      case dateArray[0] > 31 || dateArray[0] <= 0 :
        console.log("Incorrect Date values received")
        return todaysDate
      case dateArray[1] > 12 || dateArray[1] <= 0 :
        console.log("Incorrect Date values received")
        return todaysDate
      default:
    }

    const day = dateArray[0];
    const month = dateArray[1]-1;
    const year = dateArray[2]

    return { day, month, year}
  }
  const { day, month, year } = getDateValues(date)

  const daysStyle = `text-base w-16 h-12 flex justify-center items-center `;  

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const lastDay = new Date(year, month + 1, 0).getDate();
  let days = new Array(lastDay).fill(null).map((e,i) => i+1 );

  const lastDayIndex = new Date(year, month+1, 0).getDay();
  let nextMonthDays = new Array(6-lastDayIndex).fill(null).map((e,i) => i+1 ); 
  
  let lastMonthDays = [];
  const prevLastDay = new Date(year, month, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  for(let i=firstDayIndex-1; i >= 0; i--) {
    lastMonthDays.push(prevLastDay - i);
  }

  
  return (
    <div className='w-full bg-gray-900 text-white'>
      <div className='w-full h-7 bg-slate-700 flex justify-center items-center py-0 px-2 text-lg text-center mb-0.5 font-normal'>
        <h1>{`${months[month]} ${year}`}</h1>
      </div>
      <div className='weekdays w-full h-12 py-1 px-2 flex justify-center items-center' >
        {weekDays.map((day,i) => <div key={i} className='text-sm font-normal w-16 flex justify-center items-center'>{day}</div> )}
      </div>
      <div className="days w-full flex justify-center flex-wrap p-1" >
        {lastMonthDays.map((d,i) => <div key={i} className={daysStyle.concat(`opacity-50`)}>{d}</div>)}
        {days.map((d,i) => <div key={i} className={d === day? daysStyle.concat(`bg-slate-400 text-black`) : daysStyle}>{d}</div>)}
        {nextMonthDays.map((d,i) => <div key={i} className={daysStyle.concat(`opacity-50`)}>{d}</div>)}
      </div>
    </div>
  )
}

export default Calendar