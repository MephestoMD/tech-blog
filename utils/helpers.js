module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
      },
    format_dateSpec: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}
       @ ${new Date(date).getHours() % 12 || 12}:${new Date(date).getMinutes()}`;
      },
}