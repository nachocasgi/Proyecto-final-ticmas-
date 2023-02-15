document.body.onload = function() {
    alert('Este es mi proyecto, de lo aprendido use html, css, bootstrap y por ultimo eventos de jss como addeventlistener, mouseover y mouseout. Espero que les guste, saludos');
  }

document.getElementById('mercado').onmouseover= function (){
    console.log("funciona");
    document.getElementById('fecha1').innerHTML= "1995 -  1999";
    document.getElementById('textm1').innerHTML= "Fui ayudante de un contador con 10 años de experiencia";
    document.getElementById('textm2').innerHTML= "Recolecte mucha experiencia y aprendi sobre los sistemas de contabilidad";
}
document.getElementById('mercado').onmouseout= function (){
    console.log("funciona");
    document.getElementById('fecha1').innerHTML= "";
    document.getElementById('textm1').innerHTML= "";
    document.getElementById('textm2').innerHTML= "";
}

document.getElementById('tenaris').onmouseover= function (){
    console.log("funciona");
    document.getElementById('fecha2').innerHTML= "2000 - 2005 ";
    document.getElementById('text3').innerHTML= "Primer cargo con responsabilidad absoluta";
    document.getElementById('text4').innerHTML= "Maneje las cuentas de tenaris y aprendi sobre la cadena de mando";
}
document.getElementById('tenaris').onmouseout= function (){
    console.log("funciona");
    document.getElementById('fecha2').innerHTML= " ";
    document.getElementById('text3').innerHTML= "";
    document.getElementById('text4').innerHTML= "";
}


document.getElementById('ypf').onmouseout= function (){
    console.log("funciona");
    document.getElementById('fecha3').innerHTML= "";
    document.getElementById('text5').innerHTML= " ";
    document.getElementById('text6').innerHTML= "";
}

document.getElementById('ypf').onmouseover= function (){
    console.log("funciona");
    document.getElementById('fecha3').innerHTML= "2008 - 2020";
    document.getElementById('text5').innerHTML= "me dan mi propio equipo para la direccion de la empresa ";
    document.getElementById('text6').innerHTML= "mantengo el cargo por 12 años y logro dejar en 0 perdidas";
}


document.getElementById('pelle').onmouseover= function (){
    console.log("funciona");
    document.getElementById('texto_pelle').innerHTML= "Termine la secundaria con un promedio general de 9 en las materias de contabilidad y matematica";
}
document.getElementById('pelle').onmouseout= function (){
    console.log("funciona");
    document.getElementById('texto_pelle').innerHTML= "";
}

document.getElementById('uba').onmouseover= function (){
    console.log("funciona");
    document.getElementById('texto_uba').innerHTML= "Me graduo de contador nacional con promedio 8 general";
}
document.getElementById('uba').onmouseout= function (){
    console.log("funciona");
    document.getElementById('texto_uba').innerHTML= "";
}

document.getElementById('moron').onmouseover= function (){
    console.log("funciona");
    document.getElementById('texto_moron').innerHTML= "Completo un master buscando mas estudios";
}

document.getElementById('moron').onmouseout= function (){
    console.log("funciona");
    document.getElementById('texto_moron').innerHTML= "";
}    
    
document.getElementById('game').addEventListener('click', function(){
 document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80)';
 console.log("funciona");
});
document.getElementById('viaje').addEventListener('click', function(){
document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/185289.jpg)';
console.log("funciona");
});
document.getElementById('pintura').addEventListener('click', function(){
document.body.style.backgroundImage = 'url(https://storage.googleapis.com/pod_public/1300/122994.jpg)';
console.log("funciona");
});
document.getElementById('musica').addEventListener('click', function(){
document.body.style.backgroundImage = 'url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1059-041c-kv7v7wnb.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=540b607ebaba2194975b3d024a38bc09)';
console.log("funciona");
});