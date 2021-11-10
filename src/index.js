const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    /*
      + get an array by 10s
      + invert to morse
      - invert to string
    */
  
    let arrBinaries = [];  // array of binaries
    let arrMorse = []; // array of Morse codes
    let decoded = ''; // decoded string
  
    for (let i = 0; i < expr.length; i += 10) {
      let char = expr.slice(i, i + 10);
      arrBinaries.push(char);
    };
  
    //console.log('arrBinaries is ', arrBinaries);
  
    for (elem of arrBinaries) {
      if (elem === '**********') {
        arrMorse.push(' ');
      } else {
  
        let arrElem = [];
        let morseElem = '';
  
        for (let i = 0; i < elem.length; i += 2) {
          let charElem = elem.slice(i, i + 2);
          arrElem.push(charElem);
        }
  
        //console.log('arrElem is', arrElem);
  
        for (item of arrElem) {
          if (item === '10') {
            morseElem += '.';
          } else if (item === '11') {
            morseElem += '-';
          }
        }
  
        arrMorse.push(morseElem);
  
      }
      
    }
    //console.log('arrMorse is ', arrMorse);
  
    for (elem of arrMorse) {
      if (elem === ' ') {
        decoded += ' ';
      } else {
        decoded += MORSE_TABLE[elem];
      }
    }
  
    return decoded;
  }

module.exports = {
    decode
}