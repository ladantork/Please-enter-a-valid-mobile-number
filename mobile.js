function validMobileNumber(mobileNumber) {
    const regex = /^(07|\+447|00447)\d{9}$/;
    return regex.test(mobileNumber);
}