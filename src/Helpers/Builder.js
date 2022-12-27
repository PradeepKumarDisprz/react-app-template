import dayjs from "dayjs";

export function GetMonth(month = dayjs().month(),year=dayjs().year() ) {
  month = Math.floor(month);
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(0).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}


export function GetTime()
{
  const HOURS=[]
  for(var i=0;i<24;i++)
  {
    HOURS.push(dayjs().startOf('day').add(i,"hours"))
  }
  return HOURS;
}