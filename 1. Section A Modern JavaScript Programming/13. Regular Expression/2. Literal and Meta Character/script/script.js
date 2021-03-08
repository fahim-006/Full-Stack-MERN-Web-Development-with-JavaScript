//Literal character

let re;
let str;

re = /hellow/;
re = /hellow/i;
re = /hel/i;
re = /lo w/i;
re = /loW/i;

str = "Hellow World";

//str will be matched with re

reTest (re, str);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does not match ${re.source}`);
    }
}

//meta character
re = /^hello/i; //must strat with h
re = /hello$/i; //must end with o
re = /^hellow$/ //must strat and end with
re = /^h.llo$/ //there can be anything in the dot
re = /h*llow/i; //there should be one character in the place of '.' .  On the other hand, there can be character or not;
re = /he?llo/i; //e is optional and not
re = /hellow\?/ // ? is a part of regular expression