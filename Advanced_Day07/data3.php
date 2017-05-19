<?php
header("Content-Type:text/html;charset=utf-8");
$data = '{"name" : "李四", "age" : 20}';
$callback = $_GET["callback"];
echo $callback . "(" . $data . ")";
?>