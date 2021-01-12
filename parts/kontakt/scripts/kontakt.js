let sendButton = document.querySelector ( "#kontakt-button" );
let mainContainer = document.querySelector ( ".kontakt-container" );
let modalWindowSuccess = document.querySelector ( ".success" );
let modalWindowError = document.querySelector ( ".error" );
let textArea = document.querySelector ( "#textarea" );
let closeBtn = document.querySelectorAll ( ".conf-but" );

mainContainer.addEventListener ( "click", (evt => {
    closeBtn.forEach ( button => {
        if ( evt.target === button ) {
            evt.target.parentNode.parentNode.style.display = 'none'
            textArea.value = "";
        }
    } )
}) );

let sendMessage = () => {
    if ( textArea.value != "" ) {
        modalWindowSuccess.style.display = "block";
    }
    else {
        modalWindowError.style.display = "block";
    }
};

sendButton.addEventListener ( "click", sendMessage );