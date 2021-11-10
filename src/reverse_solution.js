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

// getMorse(char) returns Morse code for char

function getMorse(char) {
  //console.log(Object.keys(MORSE_TABLE).find(key => MORSE_TABLE[key] === char));
  return Object.keys(MORSE_TABLE).find(key => MORSE_TABLE[key] === char);
}

// getBinary(morse) returns binary code for input Morse code

function getBinary(morse) {
  //TODO
  // + объявить переменную
  // + сделать цикл на заполнение пустого
  // + сделать цикл на преобразование
  
  let binary = '';

  for (let i = 0; i < (5 - morse.length); i++) {
    binary += '00';
  };

  //console.log(binary);

  for (let i = 0; i < morse.length; i++) {
    if (morse[i] === '-') {
      binary += '11';
    } else {
      binary += '10';
    }  
  }

  //console.log(binary);
  return binary;

}

// TODO
// exception for 'space' where?

// function decode(expr) returns binary code for expression in English

function decode(expr) {
  let decoded = '';

  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === ' ') {
      decoded += '**********';
    } else {
      decoded += getBinary(getMorse(expr[i]));
    }
    
  }

  return decoded;
}

//getMorse('a');
//getBinary('a');
//decode('a b')



