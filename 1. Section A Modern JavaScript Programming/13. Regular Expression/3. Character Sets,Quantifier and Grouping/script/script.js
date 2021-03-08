//character sets using brackets

re = /h[ea]llo/ //e or a ke thakai lagbe, ea thakle hobe na
str = "hallo";
x = re.exec(str);
document.write(x);

re = /[HA]ello/;
re = /[^ha]llo/; //anything expext h or a
re= /[a-z]llo/; //there should be one character from a to z
re = /^{A-Z}ello/; //must start with capital letter
re = /A-Z a-z/; //uppercase A-Z or lowercase a-z
re = /[0-9]ello/; //there should be a digit at the starting of the sentence
re = /[^0-9]ellow/; //no digit before the sentence

//Braces
re = /el{2}0/; //there should be 'l' 2 times
re = /el{2,5}o/; //there should be 'l' bfrom 2 to 5 times
re = /hel{2}o/; //at least 2 times

//parenthesis() ->grouping
re = /^([0-9]{3})/ //there should be 3 digits

//Bangladeshi phone number
re= /^01[0-9{9}$]/;

//str = 2x3x7x
re = /^([0-9]x){3}/;