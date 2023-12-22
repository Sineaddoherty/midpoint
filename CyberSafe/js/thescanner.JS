const URLVpage = e => {
    let fname = document.getElementById('site').value;
      
        

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() 
           
        );

    if(!exist){
        formData.push({ fname });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('site').focus();
        alert("URL IS CORRECT.\nPlease go back to scanner.");
    }
    else{
        alert("");
    }
    e.preventDefault();
}

function scanpage(e) {
    let fname = document.getElementById('site').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.fname.toLowerCase() == fname);
    if(!exist){
        alert("Incorrect ");
    }
    else{
        location.href = "load.html";
    }
    e.preventDefault();
}

