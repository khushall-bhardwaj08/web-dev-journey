// Task 1: Create a Styled Console Log Message Generator
function consoleStyler(color, background, fontSize, txt) {
    // Step 3.1: Create the message variable
    let message = "%c" + txt;

    // Step 3.2: Create the style variable
    let style = `color: ${color};`;

    // Step 3.3: Append background and font size
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;

    // Step 3.4: Log the message
    console.log(message, style);
}

// Task 2: Create a Celebratory Message Generator
function celebrateStyler(reason) {
    let fontStyle = "color: tomato; font-size: 50px";

    if (reason === "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason === "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log("%cHave a great day!", fontStyle);
    }
}

// Task 3: Invoke the Functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Combine the Functions
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

// Invoke combined function
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');