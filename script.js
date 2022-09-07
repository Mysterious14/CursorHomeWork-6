const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
  console.log(salary*this.tax);
}
getMyTaxes.call(latvia, 1000);

function getMiddleTaxes() {
  console.log(this.middleSalary*this.tax);

}
getMiddleTaxes.call(litva);

function getTotalTaxes() {
  console.log(this.middleSalary*this.tax* this.vacancies) 

}
getTotalTaxes.call(litva);

function getMySalary() {
    const salary = (Math.random() * (2000 - 1500) + 1500).toFixed();
    const taxes = salary * this.tax;
    const profit = salary - taxes;
    const country ={
      salary,
      taxes,
      profit,
    }
    console.log(country);
  
}

let timerId = setInterval(() => getMySalary.call(ukraine), 10000);
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 20000);