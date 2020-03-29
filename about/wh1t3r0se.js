var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '█',
  strings: ['Hi I am wh1t3r0se, i know my name is a bit kinky but I am not... I am the coolest person you will ever find. Hope you will find me intresting... ']
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  .typeString('Find Me on Internet:- <br>')
  .typeString('<a href="#">Reddit</a> <br />')
  .typeString('<a href="#">Github</a> <br />')
  .typeString('<a onclick=javascript:alert(\'_Wh1t3r0se_#7515\')>Discord <br />')
  .pauseFor(300)
