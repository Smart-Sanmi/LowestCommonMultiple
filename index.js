var input1 = prompt('type in the first integer');
var input2 = prompt('type in the second integer');

var lowestMultiple = primeFactor(input1, input2);

document.querySelector('h1').textContent = 'LOWEST COMMON MULTIPLE IS ' + lowestMultiple;

function primeFactor(num1, num2) {
    var list1 = [];
    var list2 = [];
    var prime = true;
    let value = 1;

    while (prime === true) {
        
        list1.push(num1 * value);
        list2.push(num2 * value);
        /* console.log(list1, list2); */
        /* update list  */
        for (let i = 0; i < list1.length; i++) {
            
            if (list2.includes(list1[i])) {
                return list1[i];
            }
        }

        value+=1;
        
    }
}
/* primeFactor(5,8);  */