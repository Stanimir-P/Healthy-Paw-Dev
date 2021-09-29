export const scrollToTop = () => {
    window.scrollTo(0, 0)
}

export const calculateAge = (birthday) => {
    birthday = birthday.split('-').map(x => Number(x));
    const [birthYear, birthMonth, birthDate] = birthday;

    const currFullDate = new Date().toLocaleDateString().slice(0, 10).split('.').map(x => Number(x));
    const [currDate, currMonth, currYear] = currFullDate;

    let age = currYear - birthYear;

    if (currMonth < birthMonth || (currMonth === birthMonth && currDate < birthDate)) {
        age--;
    }

     if (age === 1 || age === 0) {
        if (currYear === birthYear) {
            if (currMonth === birthMonth || (currMonth - birthMonth === 1 && currDate < birthDate)) {
                age = '0 months old';
            } else if (currDate >= birthDate) {
                age = `${currMonth - birthMonth} months old`;
            } else if (currDate < birthDate) {
                age = `${(currMonth - birthMonth) - 1} months old`;
            }
        }

        if (currMonth < birthMonth || (currMonth === birthMonth && currDate < birthDate)) {
            if (currDate >= birthDate) {
                age = `${(12-birthMonth) + currMonth} months old`;
            } else if (currDate < birthDate) {
                age = `${((12-birthMonth) + currMonth) - 1} months old`;
            }

        }
    }

    if (typeof(age) === 'number') {
        age = `${age} years old`;
    }

    return age;
}

export const showErrorMessage = (message) => {
    const errorMessageDiv = document.querySelector(".error-message");
    errorMessageDiv.textContent = message;
    errorMessageDiv.style.display = "block";
    
    setTimeout(() => errorMessageDiv.style.display = "none", 9000);
}