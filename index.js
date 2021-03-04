/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(employee) {
   return {
     firstName: employee[0],
     familyName: employee[1],
     title: employee[2],
     payPerHour: employee[3],
     timeInEvents: [],
     timeOutEvents: [],
   };
 }

 function createEmployeeRecords(employees) {
   return employees.map(function (e) {
     return createEmployeeRecord(e);
   });
 }

 function createTimeInEvent(dateStamp) {
   let [date, hour] = dateStamp.split(" ");
   this.timeInEvents.push({
     type: "TimeIn",
     date: date,
     hour: parseInt(hour, 10),
   });
   return this;
 }
 // THEY ARE KIND OF SAME BUT JUST TWO DIFFERENT WAYS

const createTimeOutEvent = function (dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10),
  });
  return this;
};

 function hoursWorkedOnDate(date) {
   let timeIn = this.timeInEvents.find(function (record) {
     return record.date === date;
   });
   let timeOut = this.timeOutEvents.find(function (record) {
     return record.date === date;
   });
   return (timeOut.hour - timeIn.hour) / 100;
 }

 function wagesEarnedOnDate(date) {
   return hoursWorkedOnDate.call(this, date) * this.payPerHour;
 }


 const findEmployeeByFirstName = (src, employee) => {
   return src.find((record) => {
     return record.firstName === employee;
   });
 };

 function calculatePayroll(records) {
   return records.reduce((total, record) => {
     return total + allWagesFor.call(record);
   }, 0);
 } 


const allWagesFor = function () {
  let workDates = this.timeInEvents.map((record) => {
    return record.date;
  });

  let payable = workDates.reduce(
    function (total, date) {
      return total + wagesEarnedOnDate.call(this, date);
    }.bind(this),
    0
  );

  return payable;
};

