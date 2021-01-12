let oldSettings = document.querySelector ( ".settings-container" );
let newSettings = document.querySelector ( ".new-settings-container" );

let changeValueButton = document.querySelectorAll ( ".setting-value-change" );
let saveValueButton = document.querySelectorAll ( ".new-setting-save-value" );

let changeValueAcc = document.querySelectorAll(".setting-value-change_button");


let changeValue = () => {
    oldSettings.style.display = "none";
    newSettings.style.display = "block";
}
let saveValue = () => {
    oldSettings.style.display = "block";
    newSettings.style.display = "none";
}

saveValueButton.forEach ( saveButton => {
    saveButton.addEventListener ( "click", saveValue )
} )
changeValueAcc.forEach(changeAcc => {
    changeAcc.addEventListener ( "click", changeValue );
})
changeValueButton.forEach ( button => {
    button.addEventListener ( "click", changeValue );
} )

let login = document.querySelector ( ".login" )
let password = document.querySelector ( ".password" )
let mail = document.querySelector ( ".mail" )

let updateSettings = document.querySelector ( ".new-setting-save-value" );

let log = document.querySelector ( ".log" )
let pass = document.querySelector ( ".pass" )
let email = document.querySelector ( ".email" )

let birthMonth = document.querySelector ( ".birth-month" );
let birthYear = document.querySelector ( ".birth-year" );

let newBirthMonth = document.querySelector ( ".newBirthMonth" );
let newBirthYear = document.querySelector ( ".newBirthYear" );

let errorMessage = document.querySelector(".conf-modal");
let closeErrorMessage = document.querySelector(".conf-but");

updateSettings.addEventListener ( "click", () => {
    if ( login.value !== "" ) {
        log.innerHTML = login.value;
    }
    if ( password.value !== "" ) {
        pass.innerHTML = password.value;
    }
    if ( mail.value !== "") {
        email.innerHTML = mail.value;
    }
    closeErrorMessage.addEventListener("click", () =>{
        errorMessage.style.display = 'none'
    })

    let selectedMonthValue = newBirthMonth.value;
    birthMonth.innerHTML = selectedMonthValue;
    let selectedYearValue = newBirthYear.value;
    birthYear.innerHTML = selectedYearValue;

    console.log ( selectedMonthValue, selectedYearValue )
} )
let addAccounts = document.querySelectorAll ( ".setting-value-change_button" );
let accountWindow = document.querySelector ( "#connectAccounts-container" );
let closeWindow = document.querySelector ( "#close" );

addAccounts.forEach ( account => {
    account.addEventListener ( "click", () => {
        accountWindow.style.display = "flex"
    } )
} )


accountWindow.addEventListener ( "click", (evt) => {
    if ( evt.target === closeWindow ) {
        accountWindow.style.display = "none";
    }
} )





