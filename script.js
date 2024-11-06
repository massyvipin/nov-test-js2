const eNameIn = document.getElementById("eName");
const profIn = document.getElementById("profession");
const ageIn = document.getElementById("age");
const empData = document.getElementById("emp-data");
const buttonn = document.getElementById("btn");

buttonn.addEventListener("click", (event) => {
    event.preventDefault();

    const empName = eNameIn.value;
    const eProfession = profIn.value;
    const eAge = ageIn.value;

    if (empName === "" || eProfession === "" || eAge === "") {
        alert("Please fill out all fields.");
        return;
    }

    const userData = document.createElement("div");
    userData.innerHTML = `Name: ${empName}, Profession: ${eProfession}, Age: ${eAge} `;

    const str = document.createElement("string");
   str.textContent = "Emplayee add successfully";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete User";
    deleteButton.addEventListener("click", () => {
        empData.removeChild(userData);
    });

    userData.appendChild(deleteButton);
    empData.appendChild(userData);
    eNameIn.value = "";
    profIn.value = "";
    ageIn.value = "";
});









