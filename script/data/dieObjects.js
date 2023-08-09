/* Export statline objects */
/* Use the default operator to call the object from local storage if possible, or create default values if it cannot */
export const fourSideDieStatline = JSON.parse(localStorage.getItem('D4')) || {
    1:0,
    2:0,
    3:0,
    4:0
};

export const sixSideDieStatline = JSON.parse(localStorage.getItem('D6')) || {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
};

export const tenSideDieStatline = JSON.parse(localStorage.getItem('D10')) || {
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

export const twentySideDieStatline = JSON.parse(localStorage.getItem('D20')) || {
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

/* Export object of objects that contains relevant info for each die, including name, number of sides, statline object, button element, and the die statline output */
export const dieObjects = [
    {
        name: 'D4',
        sides: '4',
        image: '../../images/Dice/redD4.png',
        statObject: fourSideDieStatline,
        statOutput: d4hiddenStatlineElem
    },
    {
        name: 'D6',
        sides: '6',
        image: '../../images/Dice/blackD6.png',
        statObject: sixSideDieStatline,
        statOutput: d6hiddenStatlineElem
    },
    {
        name: 'D10',
        sides: '10',
        image: '../../images/Dice/whiteD10.png',
        statObject: tenSideDieStatline,
        statOutput: d10hiddenStatlineElem
    },
    {
        name: 'D20',
        sides: '20',
        image: '../../images/Dice/purpleD20.png',
        statObject: twentySideDieStatline,
        statOutput: d20hiddenStatlineElem
    }
];