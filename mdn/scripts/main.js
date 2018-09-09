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

console.log(Date());

var stack = [];
stack.push(43);
stack.push(67);
stack.push(3);
document.write('<b>Stack Elements:</b> '+stack.join(', '));
document.write('<br>');
document.write('<b>Sorted Stack:</b> '+stack.sort().join(', '));
stack.pop();
document.write('<br>')
document.write('<b>Stack Pop Elements:</b> '+stack.join(', '));
document.write('<br>')
document.write('<br>')



var queue = [];
queue.push(55);
queue.push(345);
queue.push(12);
document.write('<b>Queue Elements:</b> '+queue.join(', '));
document.write('<br>');
document.write('<b>Sorted Queue:</b> '+queue.sort().join(', '));
queue.shift();
document.write('<br>')
document.write('<b>Queue Pop Elements:</b> '+queue.join(', '));
document.write('<br>')
document.write('<br>')




