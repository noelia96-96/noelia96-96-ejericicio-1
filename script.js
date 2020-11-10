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

//Toda la funcionalidad en este script



var arrayUsers = new Array(7);

//Funcion crear usuarios
function createUsers(){
   var user1 = new Object();
    user1.name = 'usuario1';
    user1.country = 'spain';
    user1.money = 199;
    user1.premiumAccount = 'true';

    var user2 = new Object();
      user2.name = 'usuario2';
      user2.country = 'france';
      user2.money = 0;
      user2.premiumAccount = 'false';

    var user3 = new Object();
       user3.name = 'usuario3';
       user3.country = 'spain';
       user3.money = 537;
       user3.premiumAccount = 'false';


    var user4 = new Object();
       user4.name = 'usuario4';
       user4.country = 'italy';
       user4.money = 1004;
       user4.premiumAccount = 'true';
   
    var user5 = new Object();
       user5.name = 'usuario5';
       user5.country = 'spain';
       user5.money = 240;
       user5.premiumAccount = 'false'
    
    var user6 = new Object();
       user6.name = 'usuario6';
       user6.country = 'ireland';
       user6.money = 799;
       user6.premiumAccount = 'true';
   
    var user7 = new Object();
      user7.name = 'usuario7'
      user7.country = 'spain';
      user7.money = 3345;
      user7.premiumAccount = 'false';

      arrayUsers = [user1,user2, user3, user4, user5, user6, user7];
}

//Funcion de filtrado 
var filterArrayUsers;
function filterUsers(arrayUsers){

  for(let i=0; i < arrayUsers.length; i++){
    if(arrayUsers[i].money >200){
      filterArrayUsers.push(arrayUsers[i]);
    }
  }
  return filterArrayUsers;

}

window.addEventListener('load',onLoad);

function onLoad(){

console.log(arrayUsers);
console.log(filterArrayUsers);
}