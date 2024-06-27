function goToBooking() {
    window.location.assign("bookingform.html");
}

function process() {
    var allPackage= document.getElementById('package');
    var package = allPackage.value;
    var num_of_people = document.getElementById('num-of-people').value
    var totalPayment
    if(package === 'pack1'){
        totalPayment=0*num_of_people
    }else if(package === 'pack2'){
        totalPayment=20*num_of_people
    }else if(package === 'pack3'){
        totalPayment=50000*num_of_people
    }else if(package === 'pack4'){
        totalPayment=500*num_of_people
    }else if(package === 'pack4'){
        totalPayment=10000*num_of_people
    }
    document.getElementById('total').innerHTML = totalPayment;

    setTimeout(() => {
        alert('Thank you!')
        window.location.replace('about.html')
    }, 2000)
}