<?php
header("Content-Type:text/html;charset=utf-8");
$user = $_GET["user"];
$pwd = $_GET["pwd"];
if($user == "zs"){
	echo $user . "登录成功" . "你的密码：" . $pwd;
}else{
	echo $user . "登录失败". "你的密码：" . $pwd;
}
?>