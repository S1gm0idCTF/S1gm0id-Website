var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  autoStart: true,
  cursor: '█',
  strings: ['Hi we are team S1gm0id ,and we all wanna become hackers. ']
});

typewriter
  .deleteAll(1)
  .pauseFor(50)
  .deleteAll(1)
  .typeString('We work <strong>TOGETHER</strong> as a team, to write code, Play ctf\'s , and make cool projects on weekends.')
  .pauseFor(300)
  .deleteAll(1)
  .typeString('Know about our Teammates: <br />')
  .pauseFor(300)
  .typeString('<a href="#">BlackCoffee</a> <br />')
  .typeString('<a href="about/wh1t3r0se.html">Wh1t3r0se</a> <br />')
  .typeString('<a href="#">SUS Payton</a> <br />')
  .typeString('<a href="#">Navy356</a> <br />')
  .typeString('<a href="#">TheBlueFlame121</a> <br />')
  .typeString('<a href="#">T3rmina1_i11n355</a> <br />')
  .typeString('<a href="#">5rypto</a> <br />')
  .typeString('<a href="#">Qwoptropica</a> <br />')
  .typeString('<a href="#">Maheen</a> <br />')
  .typeString('<a href="#">Nyquil</a> <br />')
  .typeString('<a href="#">TheGrandPew</a> <br/>')
  .pauseFor(1000)
