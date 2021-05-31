module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
      },
    format_dateSpec: date => {
      let amPM = '';
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}
       @ ${(new Date(date).getHours()>11?amPM='PM':amPM='AM')&& (new Date(date).getHours()% 12 || 12)}:${(date.getMinutes()<10?'0':'') + new Date(date).getMinutes() + ' ' +amPM}`;
      },
}