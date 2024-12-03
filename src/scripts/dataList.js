let dataArray = [
    "warthog",
    "interceptor",
    "herbie",
    "lightning mcqueen",
    "batmobile",
    "bat tumbler",
    "cybertruck",
    "delorean",
    "elanore",
    "magic school bus",
    "toyota corolla"
];

dataArray.forEach((cars) => {
    console.log(cars);
    
});

let carsContainerElement = document.getElementById("carsContainer");

carsContainerElement.innerText = "Hello World!";