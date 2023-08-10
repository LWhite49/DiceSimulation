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

export const eightSideDieStatline = JSON.parse(localStorage.getItem('D8')) || {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0
}

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

export const twelveSideDieStatline = JSON.parse(localStorage.getItem('D12')) || {
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
    12:0
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

export const fiftySideDieStatline = JSON.parse(localStorage.getItem('D50')) || {
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
    20:0,
    21:0,
    22:0,
    23:0,
    24:0,
    25:0,
    26:0,
    27:0,
    28:0,
    29:0,
    30:0,
    31:0,
    32:0,
    33:0,
    34:0,
    35:0,
    36:0,
    37:0,
    38:0,
    39:0,
    40:0,
    41:0,
    42:0,
    43:0,
    44:0,
    45:0,
    46:0,
    47:0,
    48:0,
    49:0,
    50:0
};

export const oneHundredSideDieStatline = JSON.parse(localStorage.getItem('D100')) || {
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
    20:0,
    21:0,
    22:0,
    23:0,
    24:0,
    25:0,
    26:0,
    27:0,
    28:0,
    29:0,
    30:0,
    31:0,
    32:0,
    33:0,
    34:0,
    35:0,
    36:0,
    37:0,
    38:0,
    39:0,
    40:0,
    41:0,
    42:0,
    43:0,
    44:0,
    45:0,
    46:0,
    47:0,
    48:0,
    49:0,
    50:0,
    51:0,
    52:0,
    53:0,
    54:0,
    55:0,
    56:0,
    57:0,
    58:0,
    59:0,
    60:0,
    61:0,
    62:0,
    63:0,
    64:0,
    65:0,
    66:0,
    67:0,
    68:0,
    69:0,
    70:0,
    71:0,
    72:0,
    73:0,
    74:0,
    75:0,
    76:0,
    77:0,
    78:0,
    79:0,
    80:0,
    81:0,
    82:0,
    83:0,
    84:0,
    85:0,
    86:0,
    87:0,
    88:0,
    89:0,
    90:0,
    91:0,
    92:0,
    93:0,
    94:0,
    95:0,
    96:0,
    97:0,
    98:0,
    99:0,
    100:0
};

/* Pull HTML objects for die buttons and die statlines */
const d4hiddenStatlineElem = document.querySelector('.d4statline-hidden-output');
const d6hiddenStatlineElem = document.querySelector('.d6statline-hidden-output');
const d8hiddenStatlineElem = document.querySelector('.d8statline-hidden-output');
const d10hiddenStatlineElem = document.querySelector('.d10statline-hidden-output');
const d12hiddenStatlineElem = document.querySelector('.d12statline-hidden-output');
const d20hiddenStatlineElem = document.querySelector('.d20statline-hidden-output');
const d50hiddenStatlineElem = document.querySelector('.d50statline-hidden-output');
const d100hiddenStatlineElem = document.querySelector('.d100statline-hidden-output');
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
        name: 'D8',
        sides: '8',
        image: '../../images/Dice/blueD8.png',
        statObject: eightSideDieStatline,
        statOutput: d8hiddenStatlineElem
    },
    {
        name: 'D10',
        sides: '10',
        image: '../../images/Dice/whiteD10.png',
        statObject: tenSideDieStatline,
        statOutput: d10hiddenStatlineElem
    },
    {
        name: 'D12',
        sides: '12',
        image: '../../images/Dice/blueD12.png',
        statObject: twelveSideDieStatline,
        statOutput: d12hiddenStatlineElem
    },
    {
        name: 'D20',
        sides: '20',
        image: '../../images/Dice/purpleD20.png',
        statObject: twentySideDieStatline,
        statOutput: d20hiddenStatlineElem
    },
    {
        name: 'D50',
        sides: '50',
        image: '../../images/Dice/goldenD50.png',
        statObject: fiftySideDieStatline,
        statOutput: d50hiddenStatlineElem
    },
    {
        name: 'D100',
        sides: '100',
        image: '../../images/Dice/greenD100.png',
        statObject: oneHundredSideDieStatline,
        statOutput: d100hiddenStatlineElem
    }
];