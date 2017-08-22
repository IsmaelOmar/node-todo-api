var getFullDate = () =>{
var d = new Date();

var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();

var day = d.getUTCDate();

var month = d.getUTCMonth();

var year = d.getUTCFullYear();

var fullDate = `Record at - ${hour}:${minute}:${second}, ${day}/${month}/${year}`;

return fullDate;
}

module.exports = {
  getFullDate
}
