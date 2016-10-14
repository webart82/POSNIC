<?php session_start(); ?>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>POSNIC - User</title>

    <!-- Stylesheets -->

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/cmxform.css">
    <link rel="stylesheet" href="js/lib/validationEngine.jquery.css">

    <!-- Scripts -->
    <script src="js/lib/jquery.min.js" type="text/javascript"></script>
    <script src="js/lib/jquery.validate.min.js" type="text/javascript"></script>
    <script src="js/install_step3.js" type="text/javascript"></script>


    <!-- Optimize for mobile devices -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>

<!--    Only Index Page for Analytics   -->

<!-- TOP BAR -->
<div id="top-bar">

    <div class="page-full-width">

        <!--<a href="#" class="round button dark ic-left-arrow image-left ">See shortcuts</a>-->

    </div>
    <!-- end full-width -->

</div>
<!-- end top-bar -->


<!-- HEADER -->
<div id="header">

    <div class="page-full-width cf">

        <div id="login-intro" class="fl">

            <h1>User Details </h1>


        </div>
        <!-- login-intro -->

        <!-- Change this image to your own company's logo -->
        <!-- The logo will automatically be resized to 39px height. -->
        <a href="#" id="company-branding" class="fr"><img src="upload/posnic.png" alt="Point of Sale"/></a>

    </div>
    <!-- end full-width -->

</div>
<!-- end header -->

<?php
include("lib/db.class.php");

$host = $_SESSION['host'];
$user = $_SESSION['user'];
$pass = $_SESSION['pass'];
$name = $_SESSION['db_name'];
// Open the base (construct the object):
$db = new DB($name, $host, $user, $pass);

# Note that filters and validators are separate rule sets and method calls. There is a good reason for this.

require "lib/gump.class.php";

if (isset($_POST['submit']) and isset($_POST['uname']) and isset($_POST['password']) and isset($_POST['answer'])) {
    $host = $_SESSION['host'];
    $user = $_SESSION['user'];
    $pass = $_SESSION['pass'];
    $name = $_SESSION['db_name'];
    $con = mysqli_connect("$host", "$user", "$pass", "$name");
    $uname = $_POST['uname'];
    $password = $_POST['password'];
    $answer = $_POST['answer'];
    $db->query("INSERT INTO stock_user(username,password,answer,user_type)VALUES ('" . $uname . "','" . $password . "','" . $answer . "','admin')");
    echo "<script>window.location = 'install_step4.php';</script>";
    // exit;
}
?>

<!-- MAIN CONTENT -->
<div id="content">

    <form action="" method="POST" id="login-form" class="cmxform" autocomplete="off">

        <fieldset>

            <p>
                <label>UserName</label>
                <input type="text" name="uname" id="uname" class="round full-width-input" placeholder="Enter User Name"
                       autofocus/>
            </p>

            <p>
                <label>Password</label>
                <input type="password" name="password" id="password" class="round full-width-input"
                       placeholder="Enter Password" autofocus/>
            </p>

            <p>
                <label>Security Question</label>
                What's your favorite movie?
                <input type="text" name="answer" id="answer" class="round full-width-input" placeholder="Enter Answer"
                       autofocus/>
            </p>

            <!--<a href="dashboard.php" class="button round blue image-right ic-right-arrow">LOG IN</a>-->
            <input type="submit" class="button round blue image-right ic-right-arrow" name="submit" value="Next"/>
            &nbsp;</fieldset>
    </form>

</div>
<!-- end content -->


<!-- FOOTER -->
<div id="footer">
    <script>(function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=286371564842269";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>

    <div id="fb-root"></div>
    <div class="fb-like" data-href="https://www.facebook.com/posnic.point.of.sale" data-width="450"
         data-show-faces="true" data-send="true"></div>
    <div class="g-plusone" data-href="https://plus.google.com/u/0/107268519615804538483"></div>
    <script type="text/javascript">
        (function () {
            var po = document.createElement('script');
            po.type = 'text/javascript';
            po.async = true;
            po.src = 'https://apis.google.com/js/plusone.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
        })();
    </script>
    <p>Any Queries email to <a href="mailto:sridhar.posnic@gmail.com?subject=Stock%20Management%20System">sridhar.posnic@gmail.com</a>.
    </p>


</div>
<!-- end footer -->

</body>
</html>

