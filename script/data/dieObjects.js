/* Export statline objects */
/* Use the default operator to call the object from local storage if possible, or create default values if it cannot */
export const fourSideDieStatline = JSON.parse(localStorage.getItem('d4')) || {
    1:0,
    2:0,
    3:0,
    4:0
};

export const sixSideDieStatline = JSON.parse(localStorage.getItem('d6')) || {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
};

export const tenSideDieStatline = JSON.parse(localStorage.getItem('d10')) || {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
    10:0
};

export const twentySideDieStatline = JSON.parse(localStorage.getItem('d20')) || {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
    10:0,
    11:0,
    12:0,
    13:0,
    14:0,
    15:0,
    16:0,
    17:0,
    18:0,
    19:0,
    20:0
};

/* Pull HTML objects for die buttons and die statlines */
const d4hiddenStatlineElem = document.querySelector('.d4statline-hidden-output');
const d6hiddenStatlineElem = document.querySelector('.d6statline-hidden-output');
const d10hiddenStatlineElem = document.querySelector('.d10statline-hidden-output');
const d20hiddenStatlineElem = document.querySelector('.d20statline-hidden-output');
const d4ButtonElem = document.querySelector(`.d4-button`);
const d6ButtonElem = document.querySelector(`.d6-button`);
const d10ButtonElem = document.querySelector(`.d10-button`);
const d20ButtonElem = document.querySelector(`.d20-button`);

/* Export object of objects that contains relevant info for each die, including name, number of sides, statline object, button element, and the die statline output */
export const dieObjects = {
    d4: {
        name: 'd4',
        sides: '4',
        statObject: fourSideDieStatline,
        dieButton: d4ButtonElem,
        statOutput: d4hiddenStatlineElem
    },
    d6: {
        name: 'd6',
        sides: '6',
        statObject: sixSideDieStatline,
        dieButton: d6ButtonElem,
        statOutput: d6hiddenStatlineElem
    },
    d10: {
        name: 'd10',
        sides: '10',
        statObject: tenSideDieStatline,
        dieButton: d10ButtonElem,
        statOutput: d10hiddenStatlineElem
    },
    d20: {
        name: 'd20',
        sides: '20',
        statObject: twentySideDieStatline,
        dieButton: d20ButtonElem,
        statOutput: d20hiddenStatlineElem
    }
};