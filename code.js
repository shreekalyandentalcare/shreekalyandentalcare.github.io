function doPost(e) {
  try {
    // Open the Google Sheet by its ID
    var sheet = SpreadsheetApp.openById('--u4wXTtaZk').getSheetByName('Sheet1');  // Replace with your sheet's ID and sheet name
    
    // The submitted form data
    var data = e.parameter;
    // var data = JSON.parse(e.postData.contents);

    // Extract form data, including the new phone number field
    var first_name = data.first_name || '';  // Default to empty string if not provided
    var last_name = data.last_name || '';
    var gender = data.gender || '';  // Extract gender field
    var age = data.age || '';
    var date = data.date || '';
    var time = data.time || '';
    var contact = data.contact || '';
    var email = data.email || '';
    var treatment = data.treatment || '';
    var note = data.note || '';


    // Append the data to the sheet with the current timestamp
    sheet.appendRow([first_name, last_name, gender, age, date,time,contact,email,treatment,note,new Date()]);

    // Return a response to indicate success
    return ContentService.createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    // Handle errors and return failure response
    return ContentService.createTextOutput('Failure: ' + error.message)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}


<script>

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  function sendFormData(event) {
    event.preventDefault(); // Prevent default form submission

    if (!form.action) {
      alert("Error: Form action URL is missing.");
      return;
    }

    const formData = new FormData(form);
    alert("Submitting form...");

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "text/plain", // Ensure response is plain text
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        if (data.trim().toLowerCase() === "success") {
          alert("Thank you for contacting us! Redirecting...");
          setTimeout(() => window.location.href = "https://my-home-page.com", 2000);
        } else {
          alert("Oops! Something went wrong. Please try again.");
          setTimeout(() => window.location.href = "https://my-home-page.com", 2000);
        }
      })
      .catch(error => {
        console.error("Fetch error:", error);
        alert("Error: Unable to submit the form. Please check your connection and try again.");
        setTimeout(() => window.location.href = "https://my-home-page.com", 2000);
      });
  }

  form.addEventListener("submit", sendFormData);
});
    
  </script>


working one
<script>
  document.addEventListener('DOMNodeInserted', function () {
    const form = document.getElementById('appointmentForm');
    // const responseMessage = document.getElementById('response-message');
    alert("Submitting form...");
    function sendFormData(event) {
      event.preventDefault(); // Prevent form default submission

      const formData = new FormData(form);
      alert("Submitting form...");

      fetch(form.action, {
        method: "POST",
        body: formData,
      })
        .then(response => response.text())
        .then(data => {
          if (data.trim().toLowerCase() === "success") {
            alert("Thank you for contacting us! Redirecting...");
            setTimeout(() => window.location.href = "/", 2000);
          } else {
            alert("Oops! Something went wrong. Please try again.");
            setTimeout(() => window.location.href = "", 2000);
          }
        })
        .catch(error => {
          alert("Error: Unable to submit the form. Please try again.");
          setTimeout(() => window.location.href = "", 2000);
        });
    }

    // form.addEventListener("submit", sendFormData);

  });

</script>