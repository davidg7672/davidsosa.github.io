var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 50,
    deleteSpeed: 5,
});

typewriter
    .typeString("Hi, I'm David")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I like to build stuff with code.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm a student at Gonzaga University")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I study computer science and economics")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I like to run")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I also like to cook")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Huge fan of traveling the world")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Also a big fan of concerts")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();
