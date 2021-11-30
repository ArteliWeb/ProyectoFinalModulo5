import _ from 'lodash';
import './estilo.css';
import Imagen2 from './banner.jpg';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';
import './estilo.scss';

if ('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration =>{
            console.log("SW registrado",registration);
        }).catch(err=>{
            console.log("SW no registrado",err)
        });
    });
}

function componente(){
    const elemento = document.createElement('div');
    //lodash
    //elemento.innerHTML = _.join(['Hola',Datos[0][1]],' ');
    //elemento.classList.add('hola');

    const miImagen = new Image();
    miImagen.src = Imagen2;
    elemento.appendChild(miImagen);
    elemento.classList.add('encabezado');

    return elemento;
}

function componente1(){
    const elemento1 = document.createElement('div');
    elemento1.innerHTML = _.join(['Disfruta nuestro',Datos[0][1]],' ');
    elemento1.classList.add('titulo');

    return elemento1;
}

console.log(yaml.title)
console.log(json5.owner.name)
document.body.appendChild(componente())
document.body.appendChild(componente1())
document.body.classList.add('fondo')