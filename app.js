
document.getElementById('number1').addEventListener('click',() => {
    (document.getElementById('display').textContent === '0')
    ? document.getElementById('display').textContent = 1 
    : document.getElementById('display').textContent += 1 
});
document.getElementById('suma').addEventListener('click',() => {
    document.getElementById('display').textContent += '+';
});
document.getElementById('operation-c').addEventListener('click',() => {
    document.getElementById('display').textContent = 0;
});
console.log(typeof document.getElementById('display').textContent)