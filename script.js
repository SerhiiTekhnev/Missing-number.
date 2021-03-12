let button = document.querySelector('button[type=submit]')
button.addEventListener('click', function() {
    let str = document.querySelector('form input[name=word]').value;
    let arr = str.split(',').map(Number);
    let arrSorted = arr.sort((a, b) => a - b );
    let result;
    if (str === '') {
        result = 'undefined';    
    } else {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arrSorted[i] != i + 1) {
            result = i + 1;
            break;
        } 
    }}
    alert(result);
})

