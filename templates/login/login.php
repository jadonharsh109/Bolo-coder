
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
  $email_err = "email cannot be blank";
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
            header("location: index.html");
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
<body style="
    display: block;
">
<!-- NavBar start -->
<header id="headerx">
      <div class="nav-wrapper">
        <div class="logo-container">
          <h2 class="logo" id="logox">
            <a href="../../index.html" class="logo-link">
              <span class="first">B</span>olo <span class="last">C</span>oders
            </a>
          </h2>
          <div class="icons" id="iconsx">
            <a href="templates/ask/ask.php" id="link1x"
              ><i class="fa-solid fa-question"></i>
            </a>
            <a href="templates/ans/ans.php" id="link2x"
              ><i class="fa-solid fa-comments"></i
            ></a>
            <a href="templates/login/login.php" id="link3x"
              ><i class="fa-solid fa-circle-user"></i
            ></a>
          </div>
          <div id="bar">
            <i class="fa-solid fa-bars-staggered" id="responsiveBar"></i>
          </div>
        </div>
        <nav>
          <div class="nav-container">
            <ul class="nav-tabs">
              <li class="nav-tab"><a href="templates/ask/ask.php">Ask</a></li>
              <li class="nav-tab"><a href="templates/ans/ans.php">Answer</a></li>
              <li class="nav-tab"><a href="templates/FAQ/faq.html">FAQ</a></li>
              <li class="nav-tab">
                <a href="templates/contact/contact.php">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
<!-- NavBar end -->

    <div class="login">
      <div id="1" class="login-screen">
        <div class="app-title">
          <h1>Login</h1>
        </div>
        <form action="login-error.php" method="post">
        <div class="login-form">
          <div class="control-group">
          <input type="text" class="login-field" value="" name="username" placeholder="username" id="login-name">
          <label class="login-field-icon fui-user" for="login-name"></label>
          </div>
  
          <div class="control-group">
          <input type="password" class="login-field" value="" placeholder="password" name="password" id="login-pass">
          <label class="login-field-icon fui-lock" for="login-pass"></label>
          </div>
  
          <button type="submit" name="submit" id="submit" class="glow-on-hover" value="send">Login</button>

</form>
          <a class="login-link" href="signup.php" >New here? Join the BC community </a>
          
          <a class="mess-for-coder" >Welcome back, gotta question Bolo Boder!</a>
        </div>
      </div>
      
 

<footer>
	
</footer>
  <script src="javascript.js"></script>
</body>
</html>


