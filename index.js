
const form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Do something with the form data 
  console.log(name, email, message);

  // Reset the form after submission
  form.reset();
}

// //const API = 'http://localhost:3000/DRIVER';

// // GET request to retrieve all cabs
// function getDRIVER() {
//    fetch("http://localhost:3000/DRIVER")
//     .then(res => res.json())
//     .then(DRIVERData => DRIVERData.forEach(DRIVER => renderOneDRIVER (DRIVER)))
//     .catch(error => console.error(error));
// }

// function initialize(){
//   getAllDRIVERS()

// }
// initialize()

// // POST request to create a new cabs
// function createTaxi(taxi) {
//   return fetch(API, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(DRIVER)
//     })
//     .then(response => response.json())
//     .catch(error => console.error(error));
// }

// // PATCH request to update an existing cabs
// function updateTaxi(id, taxi) {
//   return fetch(`${API}/${id}`, {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(DRIVER)
//     })
//     .then(response => response.json())
//     .catch(error => console.error(error));
// }

// // DELETE request to delete an existing taxi
// function deleteTaxi(id) {
//   return fetch(`${API}/${id}`, 
//   { method: 'DELETE' })
//     .then(response => response.json())
//     .catch(error => console.error(error));
// }

// // Display all drivers
// getDrivers()
//   .then(DRIVERS=> {
//     const DRIVERList = document.getElementById('DRIVERLIST');
//     driverList.innerHTML = '';
//     drivers.forEach(DRIVER => {
//       const li = document.createElement('li');
//       li.textContent = `${DRIVER.name} - ${DRIVER.email} - ${DRIVER.message}`
//     });
//   })
console.log("rdtfgyhujkrdtfg");
fetch("http://localhost:3000/driver")
   .then (response => response.json())
   .then (data =>{
    // console.log("djjksd")

  const inside = document.querySelector(".drivers");
     for(let i=0;i<data.length;i++){
      let Firstname = data[i].firstname;
      let Lastname = data[i].lastname;
      let Email = data[i].email;
      let Cartype = data[i].cartype;
      let Picture = data[i].picture; 
      // console.log(Picture);
      const card =document.createElement("div")
      card.classList.add("card");
      card.innerHTML+=`
      <img  src='${Picture}'style='width:500px; height:300px;'>

          <p>${Firstname}</p>
         <p>${Lastname}</p>
         <p>${Email}</p>
         <p>${Cartype}</p>
         <p>${'NOTE OUR CARS ARE NOT FOR SALE'}</p>
        <p>${ "RIDE PRICE" }</p>`

        inside.appendChild(card);
    
     }
     } )
   
//POST request to create a new cabs
function createdriver(driver) {
  return fetch("http://localhost:3000/driver", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(DRIVER)
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}


