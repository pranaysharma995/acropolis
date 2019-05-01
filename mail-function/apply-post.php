
<?php
$to = "pranay.kumar@acropolisglobal.com";
$name=$_POST['name'];
$email=$_POST['email'];
$post=$_POST['post'];
$notice_period=$_POST['notice-period'];
$experience=$_POST['experience'];
$subject = "Application for joining from ".$name."";
$file_url="http://pranay.acropolisglobal.com/acropolis/uploads/";
    $file_type = $_FILES['file']['type'];



$file_name = basename($_FILES["file"]["name"]);
    $file_extension = strtolower(end(explode('.',$file_name)));
$FILE=$_POST['file_data'];

$tmp_name = $_FILES["file"]["tmp_name"];
$uploads_dir = "/home3/acropoli/pranay.acropolisglobal/acropolis/uploads";

if(!empty($file_name))
{
    // Check if file already exists
if (file_exists($file_url.$file_name))
{
    echo "Sorry, file already exists.";
}
else if($_FILES["file"]["size"] > 500000)
{
    echo "File size too large";
}

else if($file_extension != "jpg" && $file_extension != "png" && $file_extension != "jpeg"
&& $file_extension != "gif" )
{
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
}
else
{
      if(move_uploaded_file($tmp_name, "/home3/acropoli/pranay.acropolisglobal/acropolis/uploads/".$file_name))
{
} 
}
}
else
{
    echo "File not found";
}

$msg = "Hi, a query has been posted on current opening page of acropolis website with following details :

NAME : ".$name."

EMAIL : ".$email."

POST: ".$post."

NOTICE PERIOD : ".$notice_period."

EXPERIENCE : ".$experience."



FILE-PATH : ".$file_url.$file_name."

FILE-TYPE : ".$file_type."

FILE-EXTENSION  : ".$file_extension."


---- END OF MESSAGE ----"
;
$msg2 ="

HELLO:".$name."

Thankyou for choosing our service.We recieved your information.One of our excecutive will connect you shortly.

Regards
Acropolis Infotech


------END OF MESSAGE --------";
$headers = "From: RESUME <pranay.acropolisglobal.com/acropolis>" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers2 = "From:Resume<pranay.acropolisglobal.com/acropolis>" ."\r\n";
$headers2 .= "MIME-Version: 1.0" . "\r\n";
$mail=mail($to,$subject,$msg,$headers);

if($mail)
{
    echo " ";
    echo " Message Submitted";
	$mail=mail($email,"Application Form Submition Status".$name."",$msg2,$headers2);
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
