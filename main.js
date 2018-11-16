function Worker() {
  this.workerName = '';
  this.rate = 0;
  this.overTimeRate = 0;
  this.countSalary = function(hoursWorked) {
    return hoursWorked < 160 ? this.rate * hoursWorked : this.overTimeRate * hoursWorked;
  }
}

var worker = new Worker();
worker.workerName = 'Вася';
worker.rate = 400;
worker.overTimeRate = worker.rate * 2;
alert(worker.countSalary(160));