# Please-enter-a-valid-mobile-number
Write a function that takes a string of a mobile number (mobileNumber). It should return true if the number is a valid UK number and false if not.

A valid mobile number may begin with:

'07' followed by 9 more digits.
'+447' followed by 9 more digits.
'00447' followed by 9 more digits.
Anything else is invalid.

validMobileNumber('07726') // returns false

validMobileNumber('07123456789') // returns true

validMobileNumber('+447123456789') // returns true

validMobileNumber('00447123456789') // returns true

validMobileNumber('0712345678!') // returns false
