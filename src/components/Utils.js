export function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour = newDate.getHours() < 10 ? '0'+ newDate.getHours() : newDate.getHours();
    console.log(hour)
    let minute = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date} ${hour}:${minute}:${seconds}`
}