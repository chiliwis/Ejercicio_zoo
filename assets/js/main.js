console.log("Entro al main.js");

const animalRandom = document.getElementById ('animalRandom');
const URL = "http://ucamp.alumnos.dev4humans.com.mx/Main/endpoint_animales_zoo";

const randomZoo = () => {
    console.log(entro a la funcion randomZoo);
    fetch (URL)
    .then((data) => {
        console.log(data);
        animalRandom =data.url;
    })
    catch((error) => {
        console.log("Ocurrio un error");
    });
}