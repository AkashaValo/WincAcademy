const paintingWall = function(color, wallLocation) {
    console.log('Open the can with ' + color + ' paint')
    console.log('Paint the ' + wallLocation + ' wall ' + color);
};

paintingWall('green');
paintingWall('Purple');

// what happens if we call the function without an argument?
paintingWall();
// The parameter will be undefined, so it will say undefined.

paintingWall('Purple', 'bedroom');
paintingWall('white', 'kitchen');

// does the order of the arguments matter when calling the function?
// Yes the arguments should be in de same order, as in which the function expects them.

//what happens if you switch them in the function definition?
// Output makes no sense, the color will be on the place where the location should be and vice versa

//what happens if you change the order of the arguments in the function definition and when calling the function?
// Nothing since the arguments in the function and in the call are in the right order.