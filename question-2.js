// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
const newUserTask1 = {id: 5, task: "Walk the dog"};
const newUserTask2 = {id: 4, task: "Go to the gym"}
userTaskList.push(newUserTask1)
userTaskList.splice(-2,1, newUserTask2)
userTaskList.pop()
console.log(userTaskList[userTaskList.length - 1])