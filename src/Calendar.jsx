import { Header, PickerWrapper, SevenColGrid, GivenDate } from './Calendar.js';
import { MONTHS, DAYS } from './constants';

function Calendar(props) {
  var year = parseInt(props.date.split('/')[2])
  var month = parseInt(props.date.split('/')[1])
  var date = parseInt(props.date.split('/')[0])

  // Returns the number of days in a month
  const getNumberOfDaysInMonth = (year, month) => {
    return(new Date(year, month, 0).getDate())
  }

  // Returns the first day of the month
  const getFirstDayOfMonth = (year, month) => {
    var firstDay = new Date(year, month-1, 1);
    return firstDay.getDay()
  }

  // Returns the array of jsx elements of date
  function createElements(days){
    var elements = [];
    for(let i = 1; i < days+1; i++){
      if (i === date){
        elements.push(
          <GivenDate>
            <p>{i}</p>
          </GivenDate>)
      }
      else{
        elements.push(<p>{i}</p>);
      }
    }
    return elements;
}

  return (
    <PickerWrapper>
      <Header>
        <p>{MONTHS[month]} {year}</p>
      </Header>
      <SevenColGrid>
        {DAYS.map((day)=>(<p>{day}</p>))}

        {Array.from(Array(getFirstDayOfMonth(year,month)), (e, i) => {
          return <p></p>
        })}

        {createElements(getNumberOfDaysInMonth(year, month))}
      </SevenColGrid>
    </PickerWrapper>
  );
}

export default Calendar;
