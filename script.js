function hacker (name2)
{
    this.name = name2;
    this.nameSpaceCapital = function()
    {
        var newName = "";
        for (var i=0; i< this.name.length-1; i++)
        {
            newName += this.name[i].toUpperCase() + " ";
        }
        newName += this.name[this.name.length-1].toUpperCase();
        console.log(newName);
    };
    this.nameBackwards = function(){
        var newName = "";
        for (var i= this.name.length-1; i>=0; i--)
        {
            newName += this.name[i];
        }
        console.log(newName);
    };
}

function longerName(name1, name2)
{
    if (name1.length > name2.length)
    {
        console.log(`The Driver has the longest name, it has ${name1.length} characters`);
    }
    else if (name1.length < name2.length)
    {
        console.log(`Yo, navigator got the longest name, it has ${name2.length} characters`);
    }
    else{
        console.log(`wow, you both got equally long names, ${name1.length} characters`);
    }
}
function inOrder(name1, name2)
{
    newName1 = name1.toUpperCase();
    newName2 = name2.toUpperCase();

    if (newName1 < newName2)
    {
        console.log("The driver's name goes first");
    }
    else if (newName1 > newName2)
    {
        console.log("Yo, the navigator goes first definitely");
    }
    else{
        console.log("What?! You both got the same name?");
    }
}

function palindrome(phrase){
    var re = /[^A-Za-z0-9]/g;
    var newPhrase = phrase.toUpperCase().replace(re, '');
    var reverseStr = newPhrase.split('').reverse().join(''); 
    var isPalindrome = `The phrase: ${phrase} is a Palindrome`;
    for (var i =0; i< newPhrase.length; i++)
    {
        if (newPhrase[i] !== reverseStr[i])
        {
            isPalindrome = `The phrase: ${phrase} is a NOT Palindrome`;
        }
    }
    console.log(isPalindrome);
}

function phraseWordCount (phrase)
{
    var wordArr = phrase.split(" ");
    console.log(`There are ${wordArr.length} words in the String.`);
}
function wordCount(phrase, wordNeeded)
{
    var wordArr = phrase.split(" ");
    var count = 0;
    wordArr.forEach(function(word) {
        if (word === wordNeeded)
        {
            count++;
        }
    } )
    console.log(`There are ${count} instances of the word ${wordNeeded} in the String.`);
}

function assignment(){
    var hacker1 = new hacker("Peter");
    var hacker2 = new hacker (prompt("What's the navigator's name?"));

    console.log(`The driver's name is ${hacker1.name}`); 
    console.log(`The navigator's name is ${hacker2.name}`);

    longerName(hacker1.name, hacker2.name);

    hacker1.nameSpaceCapital();
    hacker2.nameBackwards();
    inOrder(hacker1.name, hacker2.name);
       
    palindrome("RaceCa,,r");

    var lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia commodo leo sed dignissim. Integer risus eros, ultricies at ligula sed, lobortis facilisis libero. Proin vestibulum ante tortor, vitae aliquam nisl aliquet eu. Cras sed turpis feugiat turpis varius consectetur. Integer tincidunt in dui eget fringilla. Etiam eget erat sed mi dictum vulputate. Nullam congue sem ac eros dignissim, ac fermentum sem blandit. Vestibulum imperdiet enim tortor, eget euismod justo varius a. Integer risus dui, gravida ac efficitur vel, rhoncus aliquet tortor. In a dui eu mi volutpat viverra. Curabitur suscipit porta nunc, luctus pretium dui viverra sit amet. Donec sollicitudin mi sit amet libero eleifend, in vehicula lorem consectetur. Suspendisse potenti. 
Ut in erat nec risus feugiat blandit. Quisque dapibus dolor eu justo efficitur, vitae vulputate ex tempor. Mauris vehicula fermentum eleifend. Mauris pretium posuere lectus, nec tincidunt est pulvinar eu. Integer efficitur nunc purus, scelerisque placerat lacus suscipit eget. Suspendisse potenti. Vestibulum rutrum auctor ipsum, sed posuere odio lacinia at. Maecenas tincidunt sagittis tempor. Vivamus augue magna, dictum in mauris eget, bibendum congue felis. Quisque auctor sem et turpis ornare, posuere sollicitudin justo interdum. 
Mauris sollicitudin placerat mattis. Curabitur at interdum lorem, vitae interdum leo. Ut a nunc lorem. Aliquam viverra tellus eu sem ultricies, ac rutrum nisl porta. In mattis lorem sed condimentum bibendum. Integer tempor ex risus, in hendrerit odio auctor ut. Pellentesque eget felis a dui porta sagittis eu at urna. Donec in erat id ex cursus lacinia nec non tellus. Sed porttitor commodo ante, ac blandit nisl tristique non.`

    phraseWordCount(lorem);
    wordCount(lorem, "et");
}

assignment();