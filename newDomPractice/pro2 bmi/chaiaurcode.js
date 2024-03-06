
let submit = document.querySelector('form')

submit.addEventListener('submit', function (e) {
    e.preventDefault();
    let input1 = parseInt(document.querySelector('#height').value)
    let input2 = parseInt(document.querySelector('#weight').value)
    let res = document.querySelector('#results');
    if (input1 === '' || input1 < 0 || isNaN(input1))
        res.innerHTML = `<span>please Inter a valid number now ur number is ${input1} in height</span>`
    else if (input2 === '' || input2 < 0 || isNaN(input2))
        res.innerHTML = `<span>please Inter a valid number now ur number is ${input2} in height</span>`
    else {
        let bmi = input1 * input2;
        res.innerHTML = `<span>${bmi}</span>`

    }
})
