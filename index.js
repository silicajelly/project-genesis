
const form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior


  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  
  console.log(name, email, message);

  
  form.reset();
}

fetch("http://localhost:3000/driver")
   .then (response => response.json())
   .then (data =>{
    
  const inside = document.querySelector(".drivers");
     for(let i=0;i<data.length;i++){
      let Firstname = data[i].firstname;
      let Lastname = data[i].lastname;
      let Email = data[i].email;
      let Cartype = data[i].cartype;
      let Picture = data[i].picture; 
      let Rideprice = data[i].rideprice;
      const card =document.createElement("div")
      card.classList.add("card");
      card.innerHTML+=`
      <img  src='${Picture}'style='width:500px; height:300px;'>

      <button id="editid">EDIT</button>
      
      <button id="deleteid">DELETE</button>
          <p>${Firstname}</p>
                 <p>${Lastname}</p>
                      <p>${Email}</p>
                           <p>${Cartype}</p>
                               <p>${'NOTE OUR CARS ARE NOT FOR SALE'}</p>`

        inside.appendChild(card);
    
     
     }
    })
    const deleteButton = document.getElementById(`deleteid-${i}`);
      deleteButton.addEventListener("click", () => {
        
        console.log("Delete button clicked for driver:", data[i]);
        card.remove();
      });

function handleSubmit(event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log(name, email, message);

  form.reset();
}