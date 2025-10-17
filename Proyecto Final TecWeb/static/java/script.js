  const imagenes = document.querySelectorAll("img");

  imagenes.forEach(imagen => {
  if(imagen.id != "icono"){
    imagen.addEventListener("mouseout", () => {
      imagen.style.width = "250px";
      imagen.style.transition = "width 0.5s";
    });
    imagen.addEventListener("mouseover", () => {
      imagen.style.width = "800px";
      imagen.style.transition = "width 0.5s";
    });
  }
});

  const titulo = document.querySelector("h1");
  const encabezadosH2 = document.querySelectorAll("h2");

  titulo.addEventListener("mouseover", () => {
    titulo.style.fontSize = "50px";
    titulo.style.color = "white";
    titulo.style.transition = "all 0.5s";
  });

  titulo.addEventListener("mouseout", () => {
    titulo.style.fontSize = "40px";
    titulo.style.color = "white";
    titulo.style.transition = "all 0.5s";
  });

  encabezadosH2.forEach(h2 => {
    h2.addEventListener("mouseover", () => {
      h2.style.fontSize = "30px";
      h2.style.color = "orange";
      h2.style.transition = "all 0.5s";
    });

    h2.addEventListener("mouseout", () => {
      h2.style.fontSize = "20px";
      h2.style.color = "white";
      h2.style.transition = "all 0.5s";
    });
  });

  window.addEventListener("load", () => {
    document.body.style.opacity = 1;
  });
  
    function eliminarhijo() {
      var p = document.getElementById("noches2");
      var h = p.firstChild;
      var i =p.lastChild;
      p.removeChild(h);
      p.removeChild(i);
      p.remove
  }










