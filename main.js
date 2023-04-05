let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante de Universidad en la carrera de Tecnologias de la Informacion y Desarollo de Software')
  .pauseFor(200)
  .deleteChars(10)
  .start();
