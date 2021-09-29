bottleSong();

function bottleSong() 
{
  const TOTAL_BOTTLES = 20;
  
  let bottleCount = TOTAL_BOTTLES;
  for(; bottleCount >= 1; --bottleCount)
  {
      console.log(bottleLineOne(bottleCount));
      console.log(bottleLineTwo(bottleCount - 1));
  }
  
  console.log(bottleLineOne(bottleCount));
  console.log(bottleLineFinal(TOTAL_BOTTLES));
}

function bottleLineOne(bottleCount)
{
    const message = bottleMessage(bottleCount);
    return capitalize(`${message} of beers on the wall, ${message} of beer`);
}

function bottleLineTwo(bottleCount)
{
    const message = bottleMessage(bottleCount);
    return `Take one down and pass it around, ${message} of beer on the wall.\n`
}

function bottleMessage(bottleCount)
{
    let result = "";
    
    if(bottleCount > 1)
    {
        result = bottleCount + " bottles";
    }
    else if (bottleCount === 1)
    {
        result = bottleCount + " bottle";
    }
    else
    {
        result = "no more bottles";
    }
    
    return result;
}

function capitalize(string)
{
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

function bottleLineFinal(bottleCount)
{
    const message = bottleMessage(bottleCount);
    return "Go to the store and buy some more, " + message + " of beer on the wall."
}