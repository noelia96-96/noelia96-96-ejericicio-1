// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true 
//  * name: usuario2, country: france, money: 0, premiumAccount: false 
//  * name: usuario3, country: spain, money: 537, premiumAccount: false 
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true 
//  * name: usuario5, country: spain, money: 250, premiumAccount: false 
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true 
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false 

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter". NO HACE FALTA FILTER SE PUEDE USAR BUCLE en el recorrido hacer ese filtrado a mano

//Hacer push si se cumple la condicion

// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.

// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.

// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.

// Utilizad constantes siempre que sea posible.
// Suerte!

var arrayUsers = new Array(7);

//Funcion crear usuarios
function createUsers(){
  arrayUsers = [ 
    {
      name: "user1",
      country: "spain",
      money : 199,
      premiumAccount : true
    },

    {
      name: "user2",
      country: "france",
      money : 0,
      premiumAccount : false
    },

    {
      name: "user3",
      country: "spain",
      money : 537,
      premiumAccount : false
    },

    {
      name: "user4",
      country: "italy",
      money : 1004,
      premiumAccount : true
    },

    {
      name: "user5",
      country: "spain",
      money : 240,
      premiumAccount : false
    },

    {
      name: "user6",
      country: "ireland",
      money : 799,
      premiumAccount : true
    },

    {
      name: "user7",
      country: "spain",
      money : 3345,
      premiumAccount : false
    },

  ]

};

//Funcion de filtrado 


function filterUsers(arrayUsers){
  let filterArrayUsers = [];
  for(let i=0; i < arrayUsers.length; i++){
    if(arrayUsers[i].money >200 && arrayUsers[i].country == "spain"){
      filterArrayUsers.push(arrayUsers[i]);
    }
  }
  return filterArrayUsers;

}

window.addEventListener('load',onLoad);

function onLoad(){

createUsers();
let filterArrayUsers=filterUsers(arrayUsers);
console.log(arrayUsers);
console.log(filterArrayUsers);
}