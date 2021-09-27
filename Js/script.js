

let fondo = true;

let titulo2 = document.createElement('h3');
let envio = document.querySelector('#fichaproducto .tarifa')
let detalle = document.querySelector('#detalleproducto .tarifa')

window.addEventListener('load', function () {
 
    let content = document.querySelector('#bloque');
    
    let imagen = document.createElement('img');
    
    content.appendChild(imagen);

    imagen.src = 'https://los40.com/los40/imagenes/2019/08/08/los40classic/1565250101_557933_1565250401_gigante_normal.jpg'


    let seccion = document.createElement('section');
    content.appendChild(seccion)
    let texto = document.createElement('p');
    texto.innerHTML = "Mi banda favorita";
    seccion.appendChild(texto);
    let boton = document.createElement("button")
    boton.innerText = "cambiar foto"
    seccion.appendChild(boton)

    
    titulo2.innerHTML = 'The Beatles'
    seccion.appendChild(titulo2)


    //Destreza 2 de js
    

    let botonString = titulo2.innerHTML
    let array = botonString.split("")
    let stringA = array.join("*")

    titulo2.innerText = stringA

    //Destreza libre
    envio.innerHTML += " en compras superiores de $5600"

    detalle.innerHTML += " Argentino"




    boton.addEventListener('click', function () {
        if (fondo == true) {
            imagen.src = 'https://images.chicmagazine.com.mx/G9HuQlkRHI4ZXaAjYJKoa-8qPLM=/958x596/uploads/media/2021/01/14/the-beatles-y-sus-hijos.jpg'
            fondo = false;
        } else {

            imagen.src = 'https://los40.com/los40/imagenes/2019/08/08/los40classic/1565250101_557933_1565250401_gigante_normal.jpg'
            fondo = true;
        }





    })

})