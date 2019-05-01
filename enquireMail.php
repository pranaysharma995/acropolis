<?php
$to = "abhishek.jha@acropolisglobal.com";
$subject = "enquire Form Submission at Acropolis";
$name=$_POST['name'];

$mobile=$_POST['mobile'];
$email=$_POST['email'];
$description=$_POST['description'];
$project_budget=$_POST['project_budget'];
$relation_with_hr=$_POST['relation-with-hr'];
$website=$_POST['website'];
$company=$_POST['company'];
$msg = "Hi, a message has been posted on Acropolis website with following details :

NAME : ".$name."

PHONE : ".$mobile."

EMAIL : ".$email."

COMPANY: ".$company."

WEBSITE : ".$website."


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