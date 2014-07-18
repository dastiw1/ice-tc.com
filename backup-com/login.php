<?php

// Configuration variables
$cookieName = "WeeblySiteLogin";

?>
<html>
<head><title>Error 401 - Authorization required</title>
<style type="text/css">
#login {
	float: none;
	text-align: left;
	width: 410px;
	margin: 0px auto;
	margin-top: 134px;
	background: #171717;
	border: 4px solid #222222;
	font-family: arial;
	color: white;
	padding: 0 0 15px 25px;
	opacity: .85;
	filter: alpha(opacity=85);
}

#title {
	font-size: 24px;
	font-weight: bold;
	display: block;
	width: 385px;
	border-bottom: 1px solid #888;
	margin-bottom: 30px;
}

#submit {
	background: #E9E9E9;
	color: #161616;
	font-size: 18px;
	font-weight: bold;
	padding: 4px;
	margin-left: 5px;
}

#password {
	border: 2px solid <?php if ($_COOKIE[$cookieName]) { print "red"; } else { print "#959595"; } ?>;
	font-size: 18px;
	padding: 5px;
	width: 305px;
}
</style>
<!--[if IE]>
<style type="text/css">

#login {
	padding: 25px 25px 15px 25px;

}

#passsword {
	width: 270px;
	height: 35px;
}

#submit {
	padding: 0px;
	margin-left: 5px;
	height: 38px;
	position: relative;
	top: 2px;
}

</style>
<! [endif]-->
<script type="text/javascript">
function redirect()
{
	var password = document.getElementById('password').value;
	document.cookie = "<?=$cookieName?>="+password+"; expires=<?=date("D, d-M-Y", strtotime("+30 days"))?> 00:00:01 GMT; path=/";
	document.location.reload();
}
</script>
</head>
<body style='background: #F2F2F2; text-align: center; margin: 0; padding: 0;'>
	<div id="login">
		<p id='title'>This area is password protected</p>
		<form onsubmit="redirect();return false;">
			<p style='font-size: 14px;'>Please enter the password below</p>
			<input type='password' name='password' id='password'/>
			<input type='submit' id='submit' value='Login'/>
			<?php if ($_COOKIE[$cookieName]) { print "<p style='font-size: 14px; color: red;'>Invalid password, please try again.</p>"; } ?>
		</form>
	</div>
</body>
</html>
