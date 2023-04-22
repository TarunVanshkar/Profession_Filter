const userData = [{id:1, name:"john", age:"18", profession:"developer"}, {id:2, name:"jack", age:"20", profession:"developer"}, {id:3, name:"karen", age:"19", profession:"admin"}];

const cardContainer = document.getElementById("card-container");
const addUserBtn = document.getElementById("add-user");
const filterUser = document.getElementById("filter-user");

function showCards(userData)
{
    cardContainer.innerHTML='';      // so every time when function call==> Card container will be empty ==> helps in filter method
    userData.forEach(element => {
        const newCard = document.createElement("div")
        newCard.classList.add("card-item")    // To add a class

        const p1 = document.createElement("p")
        p1.innerText=element.id;

        const p2= document.createElement("p")
        p2.innerText="Name: "+element.name;

        const p3= document.createElement("p")
        p3.innerText="Profession: "+element.profession;

        const p4= document.createElement("p")
        p4.innerText="Age: "+element.age;

        newCard.appendChild(p1);
        newCard.appendChild(p2);
        newCard.appendChild(p3);
        newCard.appendChild(p4);
        cardContainer.appendChild(newCard);
    })
}
showCards(userData)



function filterUserData()
{
    const profession = document.getElementById("professionId");
    const selectedProfession = profession.value;
    if(selectedProfession == "profession")
    {
        alert("Select a profession before clicking the button");
    }

    const filteredData = userData.filter(element => element.profession == selectedProfession);
    showCards(filteredData)
}
filterUser.addEventListener('click', filterUserData);




function addUser(){
    const name = document.getElementById("name");
    const profession = document.getElementById("profession");
    const age = document.getElementById("age");
    const id = userData.length + 1;
    const newUser = {
        id:id,
        name:name.value,
        age:age.value,
        profession:profession.value
    }
    userData.push(newUser);
    showCards(userData)
    name.value = '';
    age.value = '';
    profession.value = '';
}
addUserBtn.addEventListener('click', addUser);