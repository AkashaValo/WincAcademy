const age = 26;
const isFemale = true;
const driveStatus = "bob";
const firstName = "Sarah";
const totalAmount = 100;

if (age >= 18)
{
    console.log("Welcome. Please enter and have a good time");

    if (age >= 18 && age <= 25)
    {
        console.log("You are lucky and getting a 50% discount");   
    }
    else
    {
        console.log("Too bad. No Discount for you");
    }

    if (firstName == "Sarah" || firstName <= "Bram")
    {
        console.log("First round is on the house");   
    }
    else
    {
        console.log("Unfortunately your name is not Sarah or Bram");
    }

    if (totalAmount >= 100)
    {
        console.log("Your amount exceeds 100 euro, you will get free bottle of champagne");   
    }
    else if (totalAmount > 50)
    {
        console.log("Your amount exceeds 50 euro, you will get free nachos");   
    }
    else if (totalAmount > 25)
    {
        console.log("Your amount exceeds 25 euro, you will get free bitterballen");   
    }
    else
    {
        console.log("No free gift for you");   
    }
}
else
{
    console.log("You are too young. Please stay outside");
}

if (isFemale)
{
    console.log("Person is female");
}
else
{
    console.log("Person is not female");
}

if (driveStatus == "bob")
{
    console.log("Person is sober and may drive");
}
else
{
    console.log("Person is not sober and may not drive");
}