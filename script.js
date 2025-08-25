const students = [
  {
    name: "ibrohim",
    lastName: "Faruxov",
    studentId: 3344,
    studentPassword: 1747,
    teacherName: "Diyor-Krasavchik",
    studentGrop: 2057,
    studentCoin: 1000,
    studentHp: 3000,
    studentLevl: 3,
  },
  {
    name: "Karom",
    lastName: "Tenkat",
    studentId: 1122,
    studentPassword: 6969,
    teacherName: "Diyor-Krasavchik",
    studentGrop: 2057,
    studentCoin: 500,
    studentHp: 1000,
    studentLevl: 1,
  },
  {
    name: "sancho",
    lastName: "kashanda",
    studentId: 1010,
    studentPassword: 7171,
    teacherName: "Diyor-Krasavchik",
    studentGrop: 2057,
    studentCoin: 500,
    studentHp: 1000,
    studentLevl: 1,
  },
];

const inputName = document.querySelector("#inputName");
const inputPassword = document.querySelector("#inputPassword");
const sentBtn = document.querySelector("#sentBtn");
sentBtn.addEventListener("click", () => {
  const found = students.find(
    (student) =>
      student.studentId == inputName.value &&
      student.studentPassword == inputPassword.value
  );

  found ? (window.location.href = "home.html") : alert("bunday acaunt yoq");
  found ? localStorage.setItem("student", JSON.stringify(found)) : "";
});
