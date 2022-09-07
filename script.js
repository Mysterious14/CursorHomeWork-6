const students = [
  {
    name: 'Tanya',
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: 'Victor',
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: 'Anton',
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

function getSubjects(name) {
  let subjArr;
  students.map((student) => {
    student.name === name ? (subjArr = Object.keys(student.subjects)) : subjArr;
  });
  if(subjArr){
    const result = [];
    subjArr.map((subj) => {
      subj = subj.replace('_', ' ');
      subj = subj[0].toUpperCase() + subj.slice(1);
      result.push(subj);
    });
    return result;
  }
  else return "Не знайдено такого студента";
  
}
const studentName ='Anton';
document.writeln(`${studentName}'s subjects are [${getSubjects(studentName)}]<br>`)

//------------------------------------------------------------------------------------

function getAverageMark(name) {
  let markArr;
  students.map((student) => {
    student.name === name ? (markArr = Object.values(student.subjects)) : markArr;
  });
  if(markArr){
    let count = 0;
    let sumMark = 0;
    markArr.map((marks) => {
      marks.map((mark) => {
        count++;
        sumMark += mark;
      });
    });
  
    return (sumMark / count).toFixed(2);
  } 
  else return "Не знайдено такого студента";

}

document.writeln(`${studentName}'s average mark is ${getAverageMark(studentName)}<br>`)

//------------------------------------------------------------------------------------

function getStudentInfo(name) {
  let course;
  students.map((student) => {
    student.name === name ? (course = student.course) : course;
  });
  if(course){
    const AllInfo = {
      name,
      course,
      averageMark: getAverageMark(name),
    };
    return AllInfo;
  }
  else return "Не знайдено такого студента";
  
}
const AllInfo = JSON.stringify(getStudentInfo(studentName));

document.writeln(`${studentName}'s all info - ${AllInfo}<br>`)

//------------------------------------------------------------------------------------

function getStudentsNames(studentsArr) {
  const nameArr = [];
  studentsArr.map((student) => {
    nameArr.push(student.name);
  });
  return nameArr.sort();
}
document.writeln(`Імена студентів: ${getStudentsNames(students)}<br>`)

//------------------------------------------------------------------------------------

function getBestStudent(studentsArr) {
  const markArr = [];
  students.map((student) => {
    markArr.push([student.name, getAverageMark(student.name)]);
  });
  let count = 0;
  let bestStudent;
  markArr.map((el) => {
    if (count < el[1]) {
      count = el[1];
      bestStudent = el[0];
    }
  });
  return bestStudent;
}
document.writeln(`Найкращий студент - ${getBestStudent(students)} з середньою оцінкою ${getAverageMark(studentName)}<br>`)

//------------------------------------------------------------------------------------

function calculateWordLetters(text) {
  let obj = {};
  let objKey;
  let textArr = text.split('');
  textArr.map((el) => {
    objKey = el;
    obj[objKey] = textArr.filter((item) => item === el).length;
  });
  return obj;
}
const text = 'text';
const letters = JSON.stringify(calculateWordLetters(text));
document.writeln(`Кількість букв в слові "${text}" ${letters}`)
