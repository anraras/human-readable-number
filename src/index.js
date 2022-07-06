// 

module.exports = function toReadable (number)  {
    let firstNUmbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let answer =''
    
    if (number === 0) {
        answer = `${firstNUmbers[0]}`;
    }
    if (Math.trunc(number/100) != 0) {
        answer = `${firstNUmbers[Math.trunc(number/100)]} hundred `;
        number = number - Math.trunc(number/100)*100;
    }
    if ((Math.trunc(number/10) !=0) && (number > 19)) {
        answer =answer + `${dozen[Math.trunc(number/10) -2]} `;
        number = number - Math.trunc(number/10)*10;
    }
    if ((Math.trunc(number/10) !=0) && (number < 20)) {
        answer =answer + `${tenNumbers[number%10]}`;
        return answer.trim();
    } else if (number > 0) { 
        answer=answer + `${firstNUmbers[number]}`;

    }




    return answer.trim(); }


