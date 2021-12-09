const checkPhoneNumber = (phone: string) => {
	const phoneNumber = phone.replace(/\s/g, ''); //remove whitespace
	// (1) Prefix should match 021 or 08
    // (2) Matches a digit 0-9 at least 6 times
    const validNumber = /(^021|08)(\d{6})/; 

    return phoneNumber.match(validNumber);
}

export default checkPhoneNumber;