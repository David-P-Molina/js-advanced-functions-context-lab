/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
const createEmployeeRecord = function (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
const createEmployeeRecords = function (array) {
    return array.map(function(employee){
        return createEmployeeRecord(employee)
    })
}
const createTimeInEvent = function (timeStamp){
    let [date, hour] = timeStamp.split(" ")
    this.timeInEvents.push( {
        type: "TimeIn",
        hour: parseInt(hour),
        date
    })
    return this
}
const createTimeOutEvent = function (timeStamp){
    let [date, hour] = timeStamp.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date
    })
    return this
}
const hoursWorkedOnDate = function (date) {
    let inEvent = this.timeInEvents.find(function(event){
        return event.date === date
    })
    let outEvent = this.timeOutEvents.find(function(event){
        return event.date === date
    })
return ((outEvent.hour - inEvent.hour)/100)
}

const wagesEarnedOnDate = function (date) {
    let time = hoursWorkedOnDate.call(this, date)
    let payOwed = time * this.payPerHour
    return payOwed
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = function(employees, firstName) {
    return employees.find(function(record){
        return record.firstName === firstName
    })
}
let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}