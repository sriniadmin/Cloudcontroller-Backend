const button = document.getElementById('addpatient-post-btn');

button.addEventListener('click', async _ => {
    const formData = new FormData();
        console.log( document.getElementById('patientid').value);
  try {     
    const response = await fetch('/createpatient', {
      method: 'post',
      body: "patientid="+document.getElementById('patientid').value + 
      "&patientName=" +document.getElementById('patientname').value +
      "&age=20",
    headers: 
    {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    });
    console.log('Completed!', response);
    alert("Patient Added")
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});