let btn = document.getElementById("saveButton");
let usersList = document.getElementById("users_list");
const users = [];
btn.addEventListener("click", () => {
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let gender = document.getElementById("gender").value;
  let aged = document.getElementById("age").value;
  let offence = document.getElementById("offence").value;
  let plateNum = document.getElementById("platenum").value;
  let date = document.getElementById("date").value;
  if (!firstName) {
    alert("Please enter your firstname");
    return;
  }
  if (!lastName) {
    alert("Please enter your lastname");
    return;
  }
  if (!aged) {
    alert("Please enter your age");
    return;
  }
  if (!gender) {
    alert("please select gender");
  }
  if (!offence) {
    alert("Please enter the offence");
    return;
  }
  if (!plateNum) {
    alert("Please enter the vehicle's plate number");
    return;
  }
  if (!date) {
    alert("please input the date");
  }
  const user = saveUser(firstName, lastName, gender, aged,  offence, plateNum, date);
  if (!user) {
    throw new Error("opps! something went wrong, try again");
    return;
  }
  //   console.log(user);
 displayUser();
});

function saveUser(firstName, lastName, gender, aged, offence, plateNum, date) {
  const obj = {};
  if (users.indexOf(firstName) !== -1) {
    alert("user with name already exists");
    return;
  }
  obj["firstname"] = firstName;
  obj["lastname"] = lastName;
  obj["gender"] = gender;
  obj["age"] = aged;
  obj["offence"] = offence;
  obj["platenum"] = plateNum;
  obj["date"] = date;
  users.push(obj);
  return users;
}



function deleteUser() {
  
}


function displayUser() {
  usersList.innerHTML = "";
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${user.firstname}</td>
    <td>${user.lastname}</td>
    <td>${user.gender}</td>
    <td>${user.age}</td>
    <td>${user.offence}</td>
    <td>${user.platenum}</td>
    <td>${user.date}</td>

    <td>
      <button id="updatebtn"><i class="bi bi-pencil-square"></i> Update</button>
      <button id="deletebtn" type = "button" class = "delete" data-index = "${index}"><i class="bi bi-trash"></i> Delete</button>  
    </td>
    
    `;
    usersList.appendChild(row);
  });


  const deletemybutton = document.querySelectorAll(".delete");
  deletemybutton.forEach((button)=>{
    button.addEventListener("click", deleteUser);
  })
  
}

function deleteUser(action) {
  const index = action.target.getAttribute("data-index");
  users.splice(index, 1);
  displayUser();
}

// function updateUser(user){

// }
displayUser();

