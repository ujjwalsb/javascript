var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';


function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}
console.log(multiply(4,7));

document.querySelector('html').onclick = function() {
    alert('Stop poking me !');
}

