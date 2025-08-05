// Common Js
function checkDonationType(donationType) {
    $("#amount").val('');
    $("#donation_type").val(donationType);
    
    if (donationType==2) {
        $("#mandateMonths").show();
    } else {
        $("#mandate_months").val('');
        $("#mandateMonths").hide();
    }

    checkDonationAmountOption();
}

function checkDonationAmountOption(){
    var page_id = $("#page_id").val();
    var donationType = $("#donation_type").val();
    $(".pageitem").hide();
    $(".pageitem[id='"+donationType+'_'+page_id+"']").show();
}

function fillAmount(amt,tagline) {
    $("#amount").val(amt);
    $("#tagline").html(tagline);
}

function checkDonationForm(amountMin=500){
    var emailregex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,6}$/;
    var panregex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    var amountVal = $("#amount").val();
    var mobileVal = $("#mobile").val();
    var donation_type = $("#donation_type").val();
    
    if(amountVal==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Donation Amount</span>');
        $("#amount").focus();
        return false;
    }

    if(isNaN(amountVal)|| amountVal.indexOf(" ")!=-1){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Numeric Value For Donation Amount</span>');
        $("#amount").focus();
        return false;
    }
    
    if(amountVal!="" && amountVal < amountMin){
        $("#errorMessage").html('<span class="alert-danger">The amount must be greater than or equal to &#8377; '+amountMin+'.</span>');
        $("#amount").focus();
        return false;
    }

    if(donation_type==2){
        if($("#mandate_months").val()==""){
            $("#errorMessage").html('<span class="alert-danger">Please select months for mandate</span>');
            $("#mandate_months").focus();
            return false;
        }
    }

    if($("#name").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Your Name</span>');
        $("#name").focus();
        return false;
    }
    
    if($("#email").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Your Email Id</span>');
        $("#email").focus();
        return false;
    }
    if($("#email").val()!=""){
        if(!(emailregex.test($("#email").val()))){
            $("#errorMessage").html('<span class="alert-danger">Please Enter Valid Email Id</span>');
            $("#email").focus();
            return false;
        }
    }
    
    if(mobileVal==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Mobile No.</span>');
        $("#mobile").focus();
        return false;
    }
    if(isNaN(mobileVal)|| mobileVal.indexOf(" ")!=-1){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Numeric Value For Mobile No</span>');
        $("#mobile").focus();
        return false;
    }
    if (mobileVal.length<10 || mobileVal.length>10){
        $("#errorMessage").html('<span class="alert-danger">Please Enter 10 Digit For Mobile No</span>');
        $("#mobile").focus();
        return false;
    }
    
    if($("#dob").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Date Of Birth</span>');
        $("#dob").focus();
        return false;
    }
    
    if($("#pan_no").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Your Pan No.</span>');
        $("#pan_no").focus();
        return false;
    }

    if($("#pan_no").val()!=""){
        if(!(panregex.test($("#pan_no").val()))){
            $("#errorMessage").html('<span class="alert-danger">Please Enter Valid Pan No.</span>');
            $("#pan_no").focus();
            return false;
        }
    }
    
    if($("#state").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Select State</span>');
        $("#state").focus();
        return false;
    }

    if($("#city").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Your City</span>');
        $("#city").focus();
        return false;
    }

    if($("#address").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Your Address</span>');
        $("#address").focus();
        return false;
    }

    if($("#pincode").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Your Pincode</span>');
        $("#pincode").focus();
        return false;
    }
	
}

function checkSchoolDonationForm(amountMin=100){
    var emailregex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,6}$/;
    var panregex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    var amountVal = $("#amount").val();
    var mobileVal = $("#mobile").val();
    var donation_type = $("#donation_type").val();
    
    if(amountVal==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Donation Amount</span>');
        $("#amount").focus();
        return false;
    }

    if(isNaN(amountVal)|| amountVal.indexOf(" ")!=-1){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Numeric Value For Donation Amount</span>');
        $("#amount").focus();
        return false;
    }
    
    if(amountVal!="" && amountVal < amountMin){
        $("#errorMessage").html('<span class="alert-danger">The amount must be greater than or equal to &#8377; '+amountMin+'.</span>');
        $("#amount").focus();
        return false;
    }

    if(donation_type==2){
        if($("#mandate_months").val()==""){
            $("#errorMessage").html('<span class="alert-danger">Please select months for mandate</span>');
            $("#mandate_months").focus();
            return false;
        }
    }

/*
    if($("#serial_no").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Serial Number</span>');
        $("#serial_no").focus();
        return false;
    }
	*/

    if($("#student_name").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Name of Student</span>');
        $("#student_name").focus();
        return false;
    }

    if($("#class").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Select Class</span>');
        $("#class").focus();
        return false;
    }

    if($("#school_name").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter School Name</span>');
        $("#school_name").focus();
        return false;
    }

    if($("#school_address").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter School Address</span>');
        $("#school_address").focus();
        return false;
    }
/*
    if($("#name").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Parent Name</span>');
        $("#name").focus();
        return false;
    }
    
    if($("#email").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Parent Email Id</span>');
        $("#email").focus();
        return false;
    }
    if($("#email").val()!=""){
        if(!(emailregex.test($("#email").val()))){
            $("#errorMessage").html('<span class="alert-danger">Please Enter Valid Email Id</span>');
            $("#email").focus();
            return false;
        }
    }
    
    if(mobileVal==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Parent Mobile No.</span>');
        $("#mobile").focus();
        return false;
    }
    if(isNaN(mobileVal)|| mobileVal.indexOf(" ")!=-1){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Numeric Value For Mobile No</span>');
        $("#mobile").focus();
        return false;
    }
    if (mobileVal.length<10 || mobileVal.length>10){
        $("#errorMessage").html('<span class="alert-danger">Please Enter 10 Digit For Mobile No</span>');
        $("#mobile").focus();
        return false;
    }
    
    if($("#dob").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Date Of Birth</span>');
        $("#dob").focus();
        return false;
    }
    */
    /*
    if($("#pan_no").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Your Pan No.</span>');
        $("#pan_no").focus();
        return false;
    }
    */

    if($("#pan_no").val()!=""){
        if(!(panregex.test($("#pan_no").val()))){
            $("#errorMessage").html('<span class="alert-danger">Please Enter Valid Pan No.</span>');
            $("#pan_no").focus();
            return false;
        }
    }
    
    if($("#state").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Select State</span>');
        $("#state").focus();
        return false;
    }

    if($("#city").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Your City</span>');
        $("#city").focus();
        return false;
    }

    if($("#address").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Address</span>');
        $("#address").focus();
        return false;
    }

    if($("#pincode").val()==""){
        $("#errorMessage").html('<span class="alert-danger">Please Enter Your Pincode</span>');
        $("#pincode").focus();
        return false;
    }
	
}
