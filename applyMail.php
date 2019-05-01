<?php
$to = "manish.yadav@acropolisglobal.com";
$subject = "apply Form Submission at Acropolis";
$title=$_POST['title'];
$name=$_POST['name'];
$email=$_POST['email'];
$notice=$_POST['notice'];
$experience=$_POST['experience'];
$file=$_POST['file'];
$message=$_POST['message'];
$msg = "Hi, a message has been posted on Acropolis website with following details :

TITLE : ".$title."

NAME : ".$name."

EMAIL : ".$email."

NOTICE : ".$notice."

EXPERIENCE : ".$experience."

FILE : ".$file."

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