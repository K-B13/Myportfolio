

const green = document.querySelector(".green")
const purple = document.querySelector(".purple")
const orange = document.querySelector(".orange")
const flashing = document.querySelector(".flashing");
const myProjects = document.querySelector(".my-projects")
const aboutMe = document.querySelector(".about-me")
const employmentHistory = document.querySelector(".employment-history")
const qualifications = document.querySelector(".qualifications")




green.addEventListener("click", turnGreen);
purple.addEventListener("click", turnPurple);
orange.addEventListener("click", turnOrange);
flashing.addEventListener("click", turnFlashing);



const blue = document.querySelector(".blue");
const red = document.querySelector(".red")

blue.addEventListener("click", turnBlue);
red.addEventListener("click", turnRed);

function turnBlue() {
  myProjects.style.backgroundColor = "blue";
  myProjects.classList.remove("flashing-background");
  aboutMe.style.backgroundColor = "blue";
  aboutMe.classList.remove("flashing-background");
  employmentHistory.style.backgroundColor = "blue";
  employmentHistory.classList.remove("flashing-background");
  qualifications.style.backgroundColor = "blue";
  qualifications.classList.remove("flashing-background");
}

function turnRed() {
  myProjects.style.backgroundColor = "red";
  myProjects.classList.remove("flashing-background");
  aboutMe.style.backgroundColor = "red";
  aboutMe.classList.remove("flashing-background");
  employmentHistory.style.backgroundColor = "red";
  employmentHistory.classList.remove("flashing-background");
  qualifications.style.backgroundColor = "red";
  qualifications.classList.remove("flashing-background");
}

function turnGreen() {
  myProjects.style.backgroundColor = "green";
  myProjects.classList.remove("flashing-background");
  aboutMe.style.backgroundColor = "green";
  aboutMe.classList.remove("flashing-background");
  employmentHistory.style.backgroundColor = "green";
  employmentHistory.classList.remove("flashing-background");
  qualifications.style.backgroundColor = "green";
  qualifications.classList.remove("flashing-background");
}

function turnPurple() {
  myProjects.style.backgroundColor = "purple";
  myProjects.classList.remove("flashing-background");
  aboutMe.style.backgroundColor = "purple";
  aboutMe.classList.remove("flashing-background");
  employmentHistory.style.backgroundColor = "purple";
  employmentHistory.classList.remove("flashing-background");
  qualifications.style.backgroundColor = "purple";
  qualifications.classList.remove("flashing-background");
}

function turnOrange() {
  myProjects.style.backgroundColor = "orange";
  myProjects.classList.remove("flashing-background");
  aboutMe.style.backgroundColor = "orange";
  aboutMe.classList.remove("flashing-background");
  employmentHistory.style.backgroundColor = "orange";
  employmentHistory.classList.remove("flashing-background");
  qualifications.style.backgroundColor = "orange";
  qualifications.classList.remove("flashing-background");
}

function turnFlashing() {
  myProjects.classList.add("flashing-background")
  aboutMe.classList.add("flashing-background")
  employmentHistory.classList.add("flashing-background")
  qualifications.classList.add("flashing-background")
}

console.log("it is linked")