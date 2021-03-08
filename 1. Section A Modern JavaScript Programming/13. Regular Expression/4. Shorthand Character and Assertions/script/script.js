re = /\w/; //word character -> alpha, numeric or special
re = /\w+/; //one or more word character
re = /\W/; //non word character
re = /\W+/ // ono or more non word character
re = /\d/; //digit
re = /\d+/; //one or more digit
re = /\D/; //non digit
re = /\s/; //space
re = /\S/; //no space
re = /Hello\b/; //it means word boundaru, hello587568 wrong, but hello , I am Mashrur ->is ok
re = /\bHello\b/; //there should be nothing without the whitespace
re = /x(? = yz)/; //matches x only if x is before yz
str = "fsdfxyztdst";
re = /x(?=yz)/ //matches if an only if there is a x before y and z
re = /x(?!yz)/ //there should be no yz before x
