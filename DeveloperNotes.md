# Logan White 8/10/23

# Dice Simulator - My First Interactive HTML/CSS/JS Website

# UI Breakdown

This website has two fixed elements: A header containing the website title and logo, and a sidebar containing basic use instructions and a JS button. The main element is a centered grid that contains eight buttons that represent different die, with each button containing a picture of the die and its name. Hovering any button will cause its background color to darken, signifying its selection. Below this grid is a centered output for the roll multiplier, and below that is a roll output that displays an image of the die rolled, as well as the result of the roll, sorted if the roll multiplier was greater than one. Finally, below the roll output is a clickable span that expands the page to display statistics.

The website was designed with vh and vw units, so it reasonable scales down for mosts computers, with no mobile design implimented yet. 

# Features

The eight included die are the D4, D6, D8, D10, D12, D20, D50, and D100. Clicking on the button for any die will "roll" it, displaying selected die and the result in the output. Holding the click will cause the roll multiplier display to increase every half second, rolling that number of the selected die. Clicking the "View Die Statlines" span will display a div that has the statlines for each die, which will actively update as new die are rolled. Clicking this span again will hide the display again, though it will still update. Clicking the reset statlines button will reset all statlines to zero.

# Functionality

- Die Objects:
    Each die included on the website has its own object exported into the main module. Each object is stored into an array "dieObjects" that is iterated to add event listeners to each button inside the main grid. Each individual object contains the name of the die ("D8"), the number of sides ("8"), the relative source of an image ("...blueD8.png"), the local storage object used to track the statlines of each die ("eightSideDieStatline"), and finally the hidden HTML element used to output the statline ("d8hiddenStatlineOutput").

    In the same file, the guard operator is used to export and assign the statline object for each die. If there is an object in storage, it is used. If not, zeros are set for the statline.


- HTML Generation:
    Using the information avalible in each dieObject, the HTML sent into the dice grid is formed by iterating each dieObject, and adding the HTML for each individual button into an assembly string for the entire grid. The image and name are sourced from the object easily, and then a second iteration goes through adding event listeners. 


- General Roll Function:
    Rather than make a unique function for rolling each die, I made a general function that accepts a number of rolls and a dieObject, sourcing the attributes from the object. It first creates an assembly string that will create the result display, starting with the image path contained in dieObject. Then, roll multiplier times, Math.ceil(Math.random() * sides) is used to get a result that is added to an array, and the local storage statline is updated. This array is sorted, and then iterated to add to the assembly string before sending it to the output, and updating the displayed statline if it is being shown.


- Die Button Event Listeners:
    Each button has three event listeners: One on the initial click, One on the release, and One if the mouse leaves the button before releasing.

    On click, a simple Interval is set that increases a roll multiplier by 1 every half second. 

    On release, the Interval is cleared and the roll multiplier and iterated dieObject are passed into the general roll function. This same thing happens on mouse leave, but branch logic is used so that it will only happen on the FIRST event to trigger, meaning the roll is processed either then the mouse is let go, or if the mouse leaves, whichever happens first.


- Statline management:
    Each statline object is updated each time a new roll occurs, so the only difficult part is displaying them on span toggle. Each die statline has an empty p tag inside a styled div, such that it does not appear when the statline toggle is OFF (default). When the statline toggle is ON, each dieObject is iterated, and an assembly string is made in the form "{Die Name} Statline:". Then each property/value pair in the statline object is iterated and added to the assembly string so that the assembly string looks like "D4 Statline: 1-0 2-0 3-0 4-1". The last step in each iteration is outputing this assembly string to the relevant HTML output elemenet, which is saved in the dieObject. Any time a die statline is augmented while the statline toggle is ON, the display reloads, iterating each dieObject again.



# What I Learned

As this was my first real project with no clear direction (No References, no tutorials) I had many different approaches towards adding the features I wanted which gave me much more insight into what is and is not worth doing.

Firstly, the creation and exporting of an array like dieObjcets was INVALUABLE. The utility of having a catch all object containing any possibly relevant information about a piece of data allows for the use of general functions that pass the object rather than creating different functions for each new entry. For example, I originally had different roll functions for the D4, D6, D10, and D20 that all manually referenced the statlines and output elements for each dice, which was much more complicated than sourcing them directly from an organized object.

The best way to impliment this in future projects, in my mind, is any time you create a function that COULD hypothetically be multiuse like "Rolling a Die" or "Outputting a Statline" or "Calculate using this currency type", it is worth importing an object that stores the HTML fields and data attributes for the instance you need, and writing the function in general terms. This is not too much more work that just writing the single use function, and makes the code much more organized and allows for easier scalability. 

This was also my first time using a global Git account inside VS code, which allows me to sync repositories between my desktop and laptop which is invaluable. It also allows for clear version control, which makes it much easier to just work for 20 minutes and fix just one thing, which makes development more accessable.

# What's Next

Although I am proud of this website functionally and UX, it is clear the style and UI could use some improvement. Because of this, I plan to incorperate Figma into my personal design process, making my workflow Idea for a Website => Figma Design => HTML/CSS Recreation => JS Functionality. This way, I can hopefully improve the UI of my websites to match the JS quality, removing the bottleneck in my skillset.

In terms of actual projects, alongside my learning of Figma I will probably try to complete a couple Frontend Mentor projects to hone my skills. The next website project I make will probably involve music practice in some way, testing the users ability to keep time and count rhythms. Once I am more confident in my abilities, I will probably try to create a portfolio website to display this website and others I create, giving me something to display on LinkedIn/Upwork/Applications. 



    