function validMobileNumber(mobileNumber) {
    let endingChars = '';
    if (mobileNumber.startsWith('07')) {
        endingChars += mobileNumber.slice(2);
    } else if (mobileNumber.startsWith('+447')) {
        endingChars += mobileNumber.slice(4);
    } else if (mobileNumber.startsWith('00447')) {
        endingChars += mobileNumber.slice(5);
    } else {
        return false;
    }
    return endingChars.length === 9 && !isNaN(endingChars);
}