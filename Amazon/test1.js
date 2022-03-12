function preprocessDate(dates) {
  // Write your code here
  
  const months = { 'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12' };
  
  // array of string dates
  // create a map of st dates
  // create a map of th dates
  
  // all dates result
  const result = []
  
  // loop through the array dates
  for (let i = 0; i < dates.length; i++ ) {

      const dateParts = dates[i].split(' ');
      console.log(dateParts.length, dates[i])
      if (dateParts.length === 3) {
        const dayLength = dateParts[0].length;
        const day = dateParts[0].substring(0, dayLength - 2);
        const tempDate = `${dateParts[2]}-${months[dateParts[1]]}-${day.length > 1 ? day : '0'+day}`;
        console.log('temp' ,tempDate)
        result.push(tempDate)
      }
  }
  console.log('result', Array.from(result))
  return Array.from(result)

}

preprocessDate(['10',
  '20th Oct 2052',
  '6th Jun 1933',
  '26th May 1960',
  '20th Sep 1958']);