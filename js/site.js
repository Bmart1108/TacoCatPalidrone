// Pull the user entered string from the page
function getValues() {
    document.getElementById("alert").classList.add("d-none");
    let userString = document.getElementById("userString").value;
    let returnObj = checkForPalindrome(userString);
  
    
    displayData(returnObj)


}

function checkForPalindrome(userString) {

    userString = userString.toLowerCase();
    let isPalindrome = false;
    let returnObj = {};
    

    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = "";
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    if (revString !== userString) {
        isPalindrome = false;
    }
    else{
        isPalindrome = true
    }

    returnObj["isPalindrome"] = isPalindrome;
    returnObj["revString"] = revString;

    return returnObj;
}

function displayData(returnObj) {

    document.getElementById("alert").classList.add("alert-success");
    document.getElementById("alert").classList.remove("alert-danger")

    if (returnObj["isPalindrome"]== true) {
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("alertHeader").innerHTML = "well Done!"
        document.getElementById("msg").innerHTML = `Your phrase is a Palindrome<br>Your reversed string is: ${returnObj["revString"]}`;

    } else {
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("alertHeader").innerHTML = "Sorry!"
        document.getElementById("msg").innerHTML = `Your phrase is not a Palindrome<br>Your reversed string is: ${returnObj["revString"]}`;
    }

    document.getElementById("alert").classList.remove("d-none");
}