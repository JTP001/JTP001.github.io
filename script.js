function generateLinkContent() {
    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var body = document.getElementById("emailBody").value;
    var checkedValue = document.querySelector(`.form-check-input:checked`).value;
    var toEmail;
    if (checkedValue == "option1") {
        toEmail = `j.tavarespitts@mail.utoronto.ca`;
    }
    if (checkedValue == "option2") {
        toEmail = `jtavarespitts@gmail.com`;
    }

    var linkContent = toEmail + `?subject=Contact from ` + name + `&body=Email by ` + email + `%0D%0A%0D%0A` + body;
    return `mailto:` + linkContent;
}

function sendEmail() {
    var address = generateLinkContent();

    const windowRef = window.open(address, `_blank`);
  
    windowRef.focus();
  
    setTimeout(function(){
      if(!windowRef.document.hasFocus()) {
          windowRef.close();
      }
    }, 500);
  
}