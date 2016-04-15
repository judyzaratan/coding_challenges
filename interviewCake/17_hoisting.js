// If we execute this Javascript, what will the browser's console show?
// Response: The browser console will have 'undefined' because the variable text declaration, but not defintion
// inside  the logIt function will be hoisted within the scope of the function.   As a result, an undefined will be
// displayed.  To avoid confusion, place function declaration and definition at the beginning of the function definition

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();