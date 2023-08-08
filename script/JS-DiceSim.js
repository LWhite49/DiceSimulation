/* Import statline objects and dieObjects from dieObjects */
import { fourSideDieStatline, sixSideDieStatline, tenSideDieStatline, twentySideDieStatline, dieObjects } from "./data/dieObjects.js";
/* Basic Function that accepts a number of sides a die has, and returns a random result of rolling it */
function rollDie(sides) {
    return Math.ceil(Math.random() * sides) ;
} ;

/*Pull HTML elements into JS obects*/
const rollOutputElem = document.querySelector('.roll-output');
const multiplierOutoutElem = document.querySelector(`.roll-multiplier-output`);
const statlineToggleElem = document.querySelector('.statline-output-wrap');
const d4hiddenStatlineElem = document.querySelector('.d4statline-hidden-output');
const d6hiddenStatlineElem = document.querySelector('.d6statline-hidden-output');
const d10hiddenStatlineElem = document.querySelector('.d10statline-hidden-output');
const d20hiddenStatlineElem = document.querySelector('.d20statline-hidden-output');
const hiddenStatlinesWrapElem = document.querySelector('.hidden-wrap');

/*Roll functions for each die, that simulate rollNum rolls and outputs the results */
const fourSideDieRoll = (rollNum = 1) => {
    /* Prepares an assembly string and results list */
    let assemblyString = `<img class="roll-output-image" src="${dieObjects.d4.image}"/>`
    let dieResults = [];
    /* Simulates dice roll, updates and saves object, and adds result to a running list rollNum times. */
    for (let i = 0; i < rollNum; i++) {
        const d4Result = rollDie(4);
        fourSideDieStatline[String(d4Result)] += 1;
        localStorage.setItem('d4', JSON.stringify(fourSideDieStatline));
        dieResults.push(d4Result); }
    
    /* Sorts dieResults */
    dieResults.sort( (a,b) => a-b);
    /* Iterate values in sorted array, adding to assembly string */
    dieResults.forEach( value => {
        assemblyString += ` ${value},`;
    });
    /* Send assembly string to roll output*/
    rollOutputElem.innerHTML = assemblyString.substring(0, assemblyString.length-1);
    /* If statlines are being shown, update statline */
    if (d4hiddenStatlineElem.innerHTML !== '') {
        const d4statlineOutput = `D4 Stats: 1-${fourSideDieStatline['1']}   2-${fourSideDieStatline['2']}   3-${fourSideDieStatline['3']}   4-${fourSideDieStatline['4']}`;
        d4hiddenStatlineElem.innerHTML = d4statlineOutput;
    }
}

/* Remaining dieRoll functions follow the same formate as fourSideDieRoll */
const sixSideDieRoll = (rollNum = 1) => {
    let assemblyString = `<img class="roll-output-image" src="${dieObjects.d6.image}" />`;
    let dieResults = [];
    for ( let i = 0; i < rollNum; i++) {
        const d6Result = rollDie(6);
        sixSideDieStatline[String(d6Result)] += 1;
        localStorage.setItem('d6', JSON.stringify(sixSideDieStatline));
        dieResults.push(d6Result);}
    
    dieResults.sort( (a, b) => a - b);
    dieResults.forEach( value => {assemblyString += ` ${value},`});
    rollOutputElem.innerHTML = assemblyString.substring(0, assemblyString.length - 1);
    if (d6hiddenStatlineElem.innerHTML !== '') {
        const d6statlineOutput = `D6 Stats: 1-${sixSideDieStatline['1']}   2-${sixSideDieStatline['2']}   3-${sixSideDieStatline['3']}   4-${sixSideDieStatline['4']}   5-${sixSideDieStatline['5']}   6-${sixSideDieStatline['6']}`;
        d6hiddenStatlineElem.innerHTML = d6statlineOutput;
    }
};

const tenSideDieRoll = (rollNum = 1) => {
    let assemblyString = `<img class="roll-output-image" src="${dieObjects.d10.image}"/>`;
    let dieResults = [];
    for ( let i = 0; i < rollNum; i++) {
        const d10Result = rollDie(10);
        tenSideDieStatline[String(d10Result)] += 1;
        localStorage.setItem('d10', JSON.stringify(tenSideDieStatline));
        dieResults.push(d10Result); }
    dieResults.sort( (a, b) => a - b);
    dieResults.forEach( value => {assemblyString += ` ${value},`});
    rollOutputElem.innerHTML = assemblyString.substring(0, assemblyString.length-1);
    if (d10hiddenStatlineElem.innerHTML !== '') {
        const d10statlineOutput = `D10 Stats: 1-${tenSideDieStatline['1']}   2-${tenSideDieStatline['2']}   3-${tenSideDieStatline['3']}   4-${tenSideDieStatline['4']}   5-${tenSideDieStatline['5']}   6-${tenSideDieStatline['6']}   7-${tenSideDieStatline['7']}   8-${tenSideDieStatline['8']}   9-${tenSideDieStatline['9']}   10-${tenSideDieStatline['10']}`;
        d10hiddenStatlineElem.innerHTML = d10statlineOutput;
    }
}

const twentySideDieRoll = (rollNum = 1) => {
    let assemblyString = `<img class="roll-output-image" src="${dieObjects.d20.image}"/>`
    let dieResults = [];
    for (let i = 0; i < rollNum; i++) {
        const d20Result = rollDie(20);
        twentySideDieStatline[String(d20Result)] += 1;
        localStorage.setItem('d20', JSON.stringify(twentySideDieStatline));
        dieResults.push(d20Result);}
    dieResults.sort((a,b) => a-b);
    dieResults.forEach( value => {assemblyString += ` ${value},`});
    rollOutputElem.innerHTML = assemblyString.substring(0, assemblyString.length - 1);
    if (d20hiddenStatlineElem.innerHTML !== '') {
        const d20statlineOutput = `D20 Stats:  1-${twentySideDieStatline['1']}   2-${twentySideDieStatline['2']}   3-${twentySideDieStatline['3']}   4-${twentySideDieStatline['4']}   5-${twentySideDieStatline['5']}   6-${twentySideDieStatline['6']}   7-${twentySideDieStatline['7']}   8-${twentySideDieStatline['8']}   9-${twentySideDieStatline['9']}   10-${twentySideDieStatline['10']}
            11-${twentySideDieStatline['11']}   12-${twentySideDieStatline['12']}   13-${twentySideDieStatline['13']}   14-${twentySideDieStatline['14']}   15-${twentySideDieStatline['15']}   16-${twentySideDieStatline['16']}   17-${twentySideDieStatline['17']}   18-${twentySideDieStatline['18']}   19-${twentySideDieStatline['19']}   20-${twentySideDieStatline['20']}`
            d20hiddenStatlineElem.innerHTML = d20statlineOutput;
    }
}

/* Pull die */
const d4ButtonElem = document.querySelector(`.d4-button`);
const d6ButtonElem = document.querySelector(`.d6-button`);
const d10ButtonElem = document.querySelector(`.d10-button`);
const d20ButtonElem = document.querySelector(`.d20-button`);

function statlineOnClick() {
    /* If toggle is off */
    if (statlineToggleElem.innerText === 'View Die Statlines') {
        /* Assign each statline to a unique variable for each die */
        const d4statlineOutput = `D4 Stats: 1-${fourSideDieStatline['1']}   2-${fourSideDieStatline['2']}   3-${fourSideDieStatline['3']}   4-${fourSideDieStatline['4']}`;
        const d6statlineOutput = `D6 Stats: 1-${sixSideDieStatline['1']}   2-${sixSideDieStatline['2']}   3-${sixSideDieStatline['3']}   4-${sixSideDieStatline['4']}   5-${sixSideDieStatline['5']}   6-${sixSideDieStatline['6']}`;
        const d10statlineOutput = `D10 Stats: 1-${tenSideDieStatline['1']}   2-${tenSideDieStatline['2']}   3-${tenSideDieStatline['3']}   4-${tenSideDieStatline['4']}   5-${tenSideDieStatline['5']}   6-${tenSideDieStatline['6']}   7-${tenSideDieStatline['7']}   8-${tenSideDieStatline['8']}   9-${tenSideDieStatline['9']}   10-${tenSideDieStatline['10']}`;
        const d20statlineOutput = `D20 Stats:  1-${twentySideDieStatline['1']}   2-${twentySideDieStatline['2']}   3-${twentySideDieStatline['3']}   4-${twentySideDieStatline['4']}   5-${twentySideDieStatline['5']}   6-${twentySideDieStatline['6']}   7-${twentySideDieStatline['7']}   8-${twentySideDieStatline['8']}   9-${twentySideDieStatline['9']}   10-${twentySideDieStatline['10']}
            11-${twentySideDieStatline['11']}   12-${twentySideDieStatline['12']}   13-${twentySideDieStatline['13']}   14-${twentySideDieStatline['14']}   15-${twentySideDieStatline['15']}   16-${twentySideDieStatline['16']}   17-${twentySideDieStatline['17']}   18-${twentySideDieStatline['18']}   19-${twentySideDieStatline['19']}   20-${twentySideDieStatline['20']}`;
        /* Assign each HTML hidden object's contents to the statline contained in the unique variable assigned above */
        d4hiddenStatlineElem.innerHTML = d4statlineOutput;
        d6hiddenStatlineElem.innerHTML = d6statlineOutput;
        d10hiddenStatlineElem.innerHTML = d10statlineOutput;
        d20hiddenStatlineElem.innerHTML = d20statlineOutput;
        /* Change toggle text to reflect position */
        statlineToggleElem.innerHTML = 'Hide Die Statlines';
        hiddenStatlinesWrapElem.classList.add('hidden-statlines-wrap') }
    /*If toggle is on*/
    else {
        /* Hide hidden outputs again */
        d4hiddenStatlineElem.innerHTML = '';
        d6hiddenStatlineElem.innerHTML = '';
        d10hiddenStatlineElem.innerHTML = '';
        d20hiddenStatlineElem.innerHTML = '';
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

    for (let i = 1; i < 11; i++) {
        tenSideDieStatline[String(i)] = 0;
    }

    for (let i = 1; i < 21; i++) {
        twentySideDieStatline[String(i)] = 0;
    }

    localStorage.setItem('d4', JSON.stringify(fourSideDieStatline));
    localStorage.setItem('d6', JSON.stringify(sixSideDieStatline));
    localStorage.setItem('d10', JSON.stringify(tenSideDieStatline));
    localStorage.setItem('d20', JSON.stringify(twentySideDieStatline));

    /* If statline is closed, open it */
    if (statlineToggleElem.innerText === 'View Die Statlines') {
        statlineOnClick();
    }

    /* If statline is open, close then open, refreshing it */
    else if (statlineToggleElem.innerText === 'Hide Die Statlines') {
        statlineOnClick();
        statlineOnClick();
    }
    /*Reset roll output */
    rollOutputElem.innerHTML = "N/A";
}

/* Adds an event listener to reset button to toggle this function on click */
const resetButtonElem = document.querySelector(`.reset-statlines`);
resetButtonElem.addEventListener('click', () => {
    resetStatlines();
});

/* SetInterval functions and ID for multiplying roll */
function rollMultiplier() {
    rollNum += 1;
    multiplierOutoutElem.innerHTML = `x${rollNum}`;
}

let rollMultiplierID, rollNum, clearMultiplierID;

function clearMultiplier() {
    clearInterval(rollMultiplierID);
    clearTimeout(clearMultiplierID);
    rollNum = 1;
    multiplierOutoutElem.innerHTML = `x${rollNum}`;
    rollMultiplierID = null;
    clearMultiplierID = null;
}
/* On mousedown, reset rollNum to 1, and run a function every half second that increases rollNum and updates roll Output */
d4ButtonElem.addEventListener(`mousedown`, () => {
    rollNum = 1;
    rollMultiplierID = setInterval(rollMultiplier, 500);
})

/* On mouseup, clear interval and pass rollNum into the parameter for d6 die roll */
d4ButtonElem.addEventListener('mouseup', () => {
    /* If roll was already processed by mouseleave, cancel listener */
    if (!rollMultiplierID) {
        return
    }
    else {
        fourSideDieRoll(rollNum);
        clearMultiplier(); }
})

/* On mouseleave, if the setInterval is still running, run code as if the mouse unclicked */
d4ButtonElem.addEventListener('mouseleave', () => {
    if (rollMultiplierID) {
        fourSideDieRoll(rollNum);
        clearMultiplier();
    }
})

/* Reapply these listeners to the other die */

/* On mousedown, reset rollNum to 1, and run a function every half second that increases rollNum and updates roll Output */
d6ButtonElem.addEventListener(`mousedown`, () => {
    rollNum = 1;
    rollMultiplierID = setInterval(rollMultiplier, 500);
})

/* On mouseup, clear interval and pass rollNum into the parameter for d4die roll */
d6ButtonElem.addEventListener('mouseup', () => {
    if (!rollMultiplierID) {
        return
    }
    else {
        sixSideDieRoll(rollNum);
        clearMultiplier(); }
})

/* On mouseleave, if the setInterval is still running, run code as if the mouse unclicked */
d6ButtonElem.addEventListener('mouseleave', () => {
    if (rollMultiplierID) {
        sixSideDieRoll(rollNum);
        clearMultiplier();}
})
/* On mousedown, reset rollNum to 1, and run a function every half second that increases rollNum and updates roll Output */
d10ButtonElem.addEventListener(`mousedown`, () => {
    rollNum = 1;
    rollMultiplierID = setInterval(rollMultiplier, 500);
})

/* On mouseup, clear interval and pass rollNum into the parameter for d10 die roll */
d10ButtonElem.addEventListener('mouseup', () => {
    if (!rollMultiplierID) {
        return }
    else {
        tenSideDieRoll(rollNum);
        clearMultiplier(); }
    })

/* On mouseleave, if the setInterval is still running, run code as if the mouse unclicked */
d10ButtonElem.addEventListener('mouseleave', () => {
    if (rollMultiplierID) {
        tenSideDieRoll(rollNum);
        clearMultiplier();}})

/* On mousedown, reset rollNum to 1, and run a function every half second that increases rollNum and updates roll Output */
d20ButtonElem.addEventListener(`mousedown`, () => {
    rollNum = 1;
    rollMultiplierID = setInterval(rollMultiplier, 500);
})

/* On mouseup, clear interval and pass rollNum into the parameter for d20 die roll */
d20ButtonElem.addEventListener('mouseup', () => {
    if (!rollMultiplierID) {
        return }
    else {
        twentySideDieRoll(rollNum);
        clearMultiplier(); }
    })

/* On mouseleave, if the setInterval is still running, run code as if the mouse unclicked */
d20ButtonElem.addEventListener('mouseleave', () => {
    if (rollMultiplierID) {
        twentySideDieRoll(rollNum);
        clearMultiplier();}})

/* Add event listener to outline click */
statlineToggleElem.addEventListener("click", () => {
    statlineOnClick();
})