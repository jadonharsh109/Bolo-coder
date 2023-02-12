

<?php

require_once "../../config/conn.php";

$username = $password = $email = $confirm_password = "";
$username_err = $password_err = $email_err = $confirm_password_err = "";

if ($_SERVER['REQUEST_METHOD'] == "POST"){

    // Check if username is empty
    if(empty(trim($_POST["username"]))){
        $username_err = "Username cannot be blank";
    }
    else{
        $sql = "SELECT id FROM users WHERE username = ?";
        $stmt = mysqli_prepare($con, $sql);
        if($stmt)
        {
            mysqli_stmt_bind_param($stmt, "s", $param_username);

            // Set the value of param username
            $param_username = trim($_POST['username']);

            // Try to execute this statement
            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);
                if(mysqli_stmt_num_rows($stmt) == 1)
                {
                    $username_err = "This username is already taken"; 
                }
                else{
                    $username = trim($_POST['username']);
                }
            }
            else{
                echo "Something went wrong";
            }
        }
    }

    mysqli_stmt_close($stmt);


// email
if(empty(trim($_POST['email']))){
  $password_err = "email cannot be blank";
}
elseif(strlen(trim($_POST['email'])) < 5){
  $email_err = "email cannot be less than 5 characters";
}
else{
  $email = trim($_POST['email']);
}
// Check for password
if(empty(trim($_POST['password']))){
    $password_err = "Password cannot be blank";
}
elseif(strlen(trim($_POST['password'])) < 5){
    $password_err = "Password cannot be less than 5 characters";
}
else{
    $password = trim($_POST['password']);
}

// Check for confirm password field
if(trim($_POST['password']) !=  trim($_POST['confirm_password'])){
    $password_err = "Passwords should match";
}


// If there were no errors, go ahead and insert into the database
if(empty($username_err) && empty($email_err) && empty($password_err) && empty($confirm_password_err))
{
    $sql = "INSERT INTO users (username, email,  password) VALUES (?, ?, ?)";
    $stmt = mysqli_prepare($con, $sql);
    if ($stmt)
    {
        mysqli_stmt_bind_param($stmt, "sss", $param_username, $param_email, $param_password);

        // Set these parameters
        $param_username = $username;
        $param_email = $email;
        $param_password = password_hash($password, PASSWORD_DEFAULT);

        // Try to execute the query
        if (mysqli_stmt_execute($stmt))
        {
            header("location: login.php");
        }
        else{
            echo "Something went wrong... cannot redirect!";
        }
    }
    mysqli_stmt_close($stmt);
}
mysqli_close($con);
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login and signup.css">
    <script src="https://kit.fontawesome.com/9a28018dec.js" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" ></script>
    <link rel="icon" type="image/x-icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Q_magazine_logo.svg/2034px-Q_magazine_logo.svg.png">
    <title>Login and Signup Page</title>
</head>
<body>
  


    <div class="login">
      <div id="1" class="login-screen">
        <div class="app-title">
          <h1>Sign up</h1>
        </div>
        <form action="" method="post">
		<div class="login-form">
          <div class="control-group">
          <input type="text" class="login-field" name="username" value="" placeholder="User-Name" id="login-name">
          <label class="login-field-icon fui-user" for="login-name"></label>
          </div>
        <div class="login-form">
          <div class="control-group">
          <input type="text" class="login-field" name="email" value="" placeholder="Email" id="login-name">
          <label class="login-field-icon fui-user" for="login-name"></label>
          </div>
  
          <div class="control-group">
          <input type="password" class="login-field" name="password" value="" placeholder="password" id="login-pass">
          <label class="login-field-icon fui-lock" for="login-pass"></label>
          </div>
          <div class="control-group">
          <input type="password" class="login-field" name="confirm_password" value="" placeholder="Confirm password" id="login-pass">
          <label class="login-field-icon fui-lock" for="login-pass"></label>
          </div>
  
          
          <button type="submit" name="submit" id="submit" class="glow-on-hover" value="send">Submit</button>
</form>
          <a class="login-link" href="login.php" >already have a account? Login</a>
          
          <a class="login-link" >Start you journey with us!</a>
        </div>
      </div>
      
 

<footer>
	
</footer>
  <script src="javascript.js"></script>
</body>
</html>


