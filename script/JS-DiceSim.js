/* Import statline objects and dieObjects from dieObjects */
import { fourSideDieStatline, sixSideDieStatline, eightSideDieStatline, tenSideDieStatline, twelveSideDieStatline, twentySideDieStatline, fiftySideDieStatline, dieObjects } from "./data/dieObjects.js";

/*Pull HTML elements into JS obects*/
const rollOutputElem = document.querySelector('.roll-output');
const multiplierOutoutElem = document.querySelector(`.roll-multiplier-output`);
const statlineToggleElem = document.querySelector('.statline-output-wrap');
const d4hiddenStatlineElem = document.querySelector('.d4statline-hidden-output');
const d6hiddenStatlineElem = document.querySelector('.d6statline-hidden-output');
const d8hiddenStatlineElem = document.querySelector('.d8statline-hidden-output');
const d10hiddenStatlineElem = document.querySelector('.d10statline-hidden-output');
const d12hiddenStatlineElem = document.querySelector('.d12statline-hidden-output');
const d20hiddenStatlineElem = document.querySelector('.d20statline-hidden-output');
const d50hiddenStatlineElem = document.querySelector('.d50statline-hidden-output');
const hiddenStatlinesWrapElem = document.querySelector('.hidden-wrap');


/* ROLL FUNCTIONS */

/* Basic Function that accepts a number of sides a die has, and returns a random result of rolling it */
function rollDie(sides) {
    return Math.ceil(Math.random() * sides) ;
} ;

/* Generate general roll function, that accepts an object in dieObjects and a rollNum, then updates statlines and outputs results */
const dieButtonClick = (rollNum = 1, dieObject) => {
    /* Prepare an assembly string and results list */
    let assemblyString = `<img class="roll-output-image" src="${dieObject.image}" draggable="false"/>`;
    let dieResults = [];
    /* Simulates dice roll, update and saves object, and adds result to running list rollNum times */
    for (let i = 0; i < rollNum; i++) {
        const result = rollDie(Number(dieObject.sides));
        dieObject.statObject[String(result)] += 1;
        localStorage.setItem(String(dieObject.name), JSON.stringify(dieObject.statObject));
        dieResults.push(result);
    }
    /* Sort dieResults */
    dieResults.sort( (a,b) => a-b);
    /* Iterate values in sorted array, adding to assembly string */
    dieResults.forEach( value => {
        assemblyString += ` ${value},`;
    });
    /* Send assemblystring to roll output */
    rollOutputElem.innerHTML = assemblyString.substring(0, assemblyString.length - 1);
    /* If statlines are being shown, refresh statline */
    if (dieObject.statOutput.innerHTML !== '') {
        loadStatlines();
    }
}


/* STATLINE FUNCTIONS */

/* Funcion that loads statlines and changes element text if statlines are closed,
and closes statlines and reverts element text if statlines are open */
function statlineOnClick() {
    /* If toggle is off */
    if (statlineToggleElem.innerText === 'View Die Statlines') {
        loadStatlines();
    }

    /*If toggle is on*/
    else {
        /* Hide hidden outputs again */
        d4hiddenStatlineElem.innerHTML = '';
        d6hiddenStatlineElem.innerHTML = '';
        d8hiddenStatlineElem.innerHTML = '';
        d10hiddenStatlineElem.innerHTML = '';
        d12hiddenStatlineElem.innerHTML = '';
        d20hiddenStatlineElem.innerHTML = '';
        d50hiddenStatlineElem.innerHTML = '';
        statlineToggleElem.innerHTML = 'View Die Statlines'; 
        hiddenStatlinesWrapElem.classList.remove('hidden-statlines-wrap');}
    };

/* Function that resets all statlines, and forces open statline */
function resetStatlines() {
    /* Reset all die statlines to zero, then save over the existing object in local storage */
    for (let i = 1; i < 5; i++) {
        fourSideDieStatline[String(i)] = 0;
    }

    for (let i = 1; i < 7; i++) {
        sixSideDieStatline[String(i)] = 0;
    }

    for (let i = 1; i < 9; i++) {
        eightSideDieStatline[String(i)] = 0;
    }

    for (let i = 1; i < 11; i++) {
        tenSideDieStatline[String(i)] = 0;
    }

    for (let i = 1; i < 13; i++) {
        twelveSideDieStatline[String(i)] = 0;
    }

    for (let i = 1; i < 21; i++) {
        twentySideDieStatline[String(i)] = 0;
    }

    for (let i = 1; i < 51; i++) {
        fiftySideDieStatline[String(i)] = 0;
    }

    localStorage.setItem('D4', JSON.stringify(fourSideDieStatline));
    localStorage.setItem('D6', JSON.stringify(sixSideDieStatline));
    localStorage.setItem('D8', JSON.stringify(eightSideDieStatline));
    localStorage.setItem('D10', JSON.stringify(tenSideDieStatline));
    localStorage.setItem('D12', JSON.stringify(twelveSideDieStatline));
    localStorage.setItem('D20', JSON.stringify(twentySideDieStatline));
    localStorage.setItem('D50', JSON.stringify(fiftySideDieStatline));

    /* If statline is closed, open it */
    if (statlineToggleElem.innerText === 'View Die Statlines') {
        statlineOnClick();
    }

    /* If statline is open, refresh it */
    else if (statlineToggleElem.innerText === 'Hide Die Statlines') {
        loadStatlines();
    }
    /*Reset roll output */
    rollOutputElem.innerHTML = "N/A";
}

/* Adds an event listener to reset button to toggle this function on click */
const resetButtonElem = document.querySelector(`.reset-statlines`);
resetButtonElem.addEventListener('click', () => {
    resetStatlines();
});

/* Function that refreshes the statlines, by iterating dieObjects and generating the statline */
function loadStatlines() {
    /* Iterate dieObjects */
    dieObjects.forEach( buttonObject => {
        /* Start assembly string */
        let assemblyString = `${buttonObject.name} Stats:`;

        /* Loop once for each side of die, adding to assembly string */
        for (let i = 1; i < Number(buttonObject.sides) + 1; i++) {
            assemblyString += ` ${i}-${buttonObject.statObject[String(i)]}`;
        };

        /* Send assembly string to relevant output */
        buttonObject.statOutput.innerHTML = assemblyString.substring(0, assemblyString.length);
    })
    /* Change toggle text to reflect position */
    statlineToggleElem.innerHTML = 'Hide Die Statlines';
    hiddenStatlinesWrapElem.classList.add('hidden-statlines-wrap') }

/* Add onclick listener to statline toggle elem */
statlineToggleElem.addEventListener("click", () => {
    statlineOnClick();
})

/* ROLL MULTIPLIER FUNCTIONS */

/* Declare IntervalIDs and Multiplier variables */
let rollMultiplierID, rollNum, clearMultiplierID;

/* Function rollMultiplier is an interval that adds 1 to rollNum, and updates the display for rollNum */
function rollMultiplier() {
    rollNum += 1;
    multiplierOutoutElem.innerHTML = `x${rollNum}`;
}

/* Function that clears all IDs assigned in event listeners */
function clearMultiplier() {
    clearInterval(rollMultiplierID);
    clearTimeout(clearMultiplierID);
    rollNum = 1;
    multiplierOutoutElem.innerHTML = `x${rollNum}`;
    rollMultiplierID = null;
    clearMultiplierID = null;
}


/* GENERATE HTML AND APPLY LISTENERS */

/* Pull output element */
const dieFlexOutputElem = document.querySelector(`.dice-flex`);

/* Generate HTML using assembly string */
let assemblyString = ``;

/*Iterate die objects, adding button to assembly string */
for (let i = 0; i < dieObjects.length; i++) {
    const buttonObject = dieObjects[i];
    assemblyString += `
        <button class="dice-button ${buttonObject.name}-button">
            <img class="dice-image ${buttonObject.name}-image" src="${buttonObject.image}" draggable="false"/>
            <p class="dice-label">${buttonObject.name}</p>
        </button>`;
};

/* Send assemblyString to dieFlexELem */
dieFlexOutputElem.innerHTML = assemblyString;

/* Iterate buttons with class dice-button, adding relevant listeners */
document.querySelectorAll('.dice-button').forEach( (button, index) => {
    /* On mousedown, reset rollNum to 1, and run a function every half second that increases rollNum and updates roll Output */
    button.addEventListener(`mousedown`, () => {
        rollNum = 1;
        rollMultiplierID = setInterval(rollMultiplier, 500);
    });

    /* On mouseup, pass rollNum and dieObject into roll function, then clear multiplier info */
    button.addEventListener('mouseup', () => {
        /* If roll was already processed by mouseleave, cancel listener */
        if (!rollMultiplierID) {
            return
        }
        else {
            dieButtonClick(rollNum, dieObjects[index]);
            clearMultiplier(); }
    });

    /* If the mouse leaves early, pass rollNum and dieObject early, then clear multiplier */
    button.addEventListener('mouseleave', () => {
        if (rollMultiplierID) {
            dieButtonClick(rollNum, dieObjects[index]);
            clearMultiplier();
        }
    });
});