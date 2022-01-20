// Pull the user entered string from the page
function getValues() {
    document.getElementById("alert").classList.add("d-none");
    let userString = document.getElementById("userString").value;
    let isPalindrome = checkForPalindrome(userString);
    displayData(isPalindrome)
}

function checkForPalindrome(userString) {

    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = "";
    for (let index = userString.length - 1; index >= 0; index--) {

        revString += userString[index];

    }

    if (revString !== userString) {
        return false;
    }
    return true;
}

function displayData(isPalindrome) {

    document.getElementById("alert").classList.add("alert-success");
    document.getElementById("alert").classList.remove("alert-danger")

    if (isPalindrome == true) {
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("alertHeader").innerHTML = "well Done!"
        document.getElementById("msg").innerHTML = `Your phrase is a Palindrome`;

    } else {
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("alertHeader").innerHTML = "Sorry!"
        document.getElementById("msg").innerHTML = `Your phrase is not a Palindrome`;
    }

    document.getElementById("alert").classList.remove("d-none");
}