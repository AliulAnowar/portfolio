const btn = document.querySelector('button');
const inputemail = document.querySelector('form');
btn.addEventListener('click', () => {

  Email.send({
    // Host:"smtp.mailtrap.io",
    // Username:"77cded9dc88cb6",
    // Password: "7c7381966f62d1",
     SecureToken : "5756c41b-4d5c-471f-9714-b54131d1187b", 
    To: "shamolxsty@gmail.com",
    From: inputemail.elements["email"].value,
    Subject: inputemail.elements["subject"].value,
    Body: inputemail.elements["message"].value + "<br>" + inputemail.elements["name"].value
  }).then(msg => alert("the email successfuly send"));

});