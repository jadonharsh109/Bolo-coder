<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="style.css">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" type="image/x-icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Q_magazine_logo.svg/2034px-Q_magazine_logo.svg.png">
	<title>Document</title>
</head>
<body>
<div class="buttonww">
        <button class="glow-on-hover" type="button" onclick="window.location.href='index.html';">Go back to home Page</button>
      </div>

	  
</br>
</body>
</html>


<?php
include('form.php');
$msg="";
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
	$name=mysqli_real_escape_string($con,$_POST['name']);
	$email=mysqli_real_escape_string($con,$_POST['email']);
	$message=mysqli_real_escape_string($con,$_POST['message']);
	
	
	mysqli_query($con,"insert into contact(name,email,message) values('$name','$email','$message')");
	$msg="Thanks message";
	
	$html="<table><tr><td>Name</td><td>$name</td></tr><tr><td>Email</td><td>$email</td></tr><tr><td>Message</td><td>$message</td></tr></table>";
	
	include('smtp/PHPMailerAutoload.php');
	$mail=new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host="smtp.gmail.com";
	$mail->Port=587;
	$mail->SMTPSecure="tls";
	$mail->SMTPAuth=true;
	$mail->Username="quantgamemail@gmail.com";
	$mail->Password="";
	//wujzbgilzrlpbgsa
	$mail->SetFrom("quantgamemail@gmail.com");
	$mail->addAddress("quantgamemail@gmail.com");
	$mail->IsHTML(true);
	$mail->Subject="New Contact Us";
	$mail->Body=$html;
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
	if($mail->send()){
		//echo "Mail send";
	}else{
		//echo "Error occur";
	}
	echo $msg;
}

$mailid = $email;
$subject = "Thank For the Feedback!";
$text_message = "Hello";
$message = "<h2><i>Thank You for Contact with us.</i></h2>";

try
{
$mail->IsSMTP();
$mail->isHTML(true);
$mail->SMTPDebug = 0;
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Host = "smtp.gmail.com";
$mail->Port = '465';
$mail->AddAddress($mailid);
$mail->Username="quantgamemail@gmail.com";
$mail->Password="";
$mail->addBCC('karanyobro@gmail.com');
$mail->SetFrom('quantgamemail@gmail.com','quiska');
$mail->AddReplyTo("quantgamemail@gmail.com","quiska");
$mail->Subject = $subject;
$mail->Body = $message;
$mail->AltBody = $message;
if($mail->Send())
{
echo "Thank you for register u got a notification through the mail you provide";
}
}
catch(phpmailerException $ex)
{
$msg = "
".$ex->errorMessage()."
";
}


?>

<script>
	setTimeout(function () {
	window.location.href= 'https://quiska.ga'; // rediect hogaya baby
 
 },5000);
 </script>