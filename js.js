
const scriptURL = 'https://script.google.com/macros/s/AKfycbx4pWCE-2fS4--Teh--qS-SDaPIiQtaV4saXuD2Ey9EN1lHGOYF5-BjCdenFM_R2dwl/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => { 
//             msg.innerHTML = "Message sent successfully"
//             setTimeout(function() {
//                 msg.innerHTML = " "
//             }, 5000)
//              // Reset the form 
//         })
//         .catch(error => console.error('Error!', error.message))
// })

    function submitForm(event) {
       
        event.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => { 
            msg.innerHTML = "Message sent successfully"
            setTimeout(function() {
                msg.innerHTML = " "
            }, 1000)
           
        })
        .catch(error => console.error('Error!', error.message))

        form.reset()

        document.getElementById("confirmation-message").style.display = "block";

        setTimeout(function() {
            document.getElementById("confirmation-message").style.display = "none";
        }, 1000); 
    }
    