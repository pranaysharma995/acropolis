<?php
$to = "pranay.kumar@acropolisglobal.com";
$subject = "Contact Form Submission at Acropolis";
$name=$_POST['name'];

$phone_number=$_POST['phone_number'];
$email=$_POST['email'];
$message=$_POST['message'];
$project_budget=$_POST['project_budget'];
$country_code=$_POST['country_code'];
$msg = "Hi, a message has been posted on Acropolis website with following details :

NAME : ".$name."

PHONE : ".$phone_number."

EMAIL : ".$email."

COUNTRY-CODE: ".$country_code."

PROJECT-BUDGET : ".$project_budget."


MESSAGE : ".$message."

---- END OF MESSAGE ----"
;
$headers = "From: Pranay <pranay.acropolisglobal.com>" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$mail=mail($to,$subject,$msg,$headers);

if($mail)
{
    echo "Meassge Submitted";
	$mail=mail($email,"Thanks for your Interest",$msg2,$headers2);
 ?>
	
<?php 
}
else
{
 ?>
 <script type="text/javascript">     
        $(document).ready(function() {
			swal({ 
			 title: "Mail Not Sent !!",
			 text: "Some error occurred . Please try again !!",
			 type: "error" 
			 })
			 });
		</script>
<?php 
}
?>