
<?php
 $uname="admin";
 $pwd="admin";

 session_start();

 if(isset($_SESSION['uname'])){

 echo "<h1> welcome ".$_SESSION['uname']."</h1>";
 echo "<a href='logout.php'>logout</a><br>";
 echo"<br><a href='logout.php'<input type=button value=logout name=logout></a>";

 }
 else{
 	if($_POST['uname']==$uname && $_POST['pwd']==$pwd){
 		$_SESSION['uname']=$uname;

 	echo "<script>location.href='index1.php'</script>";
 	}
 else{
 	echo "<script>alert('username or password incorrect!')</script>";
 	echo "<script>location.href='login.php'</script>";
 }

 }

  ?>

 <!DOCTYPE html>
 <html>
 <head>
	<title>icons document</title>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1">
 
 <style>
    


*{
   box-sizing: border-box;

 }
  body{
  min-height: 100vh;
  background: url(medi.jpg)no-repeat;
  background-size: cover;
  background-position: center;
}
  nav{
  background: #594848;
  width: 100%;
  overflow: auto;
  }
  ul{
  margin: 0;
  padding: 0;
  list-style: none;
  }    

  .box{
   margin: 0 10px;
   box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);
  }

  img
  {
  margin: 50px 50px 50px 50px ;
  display: inline-block;
  padding: 5px;
  border: 1px solid #ddd;
  opacity: 1px;
  background: linear-gradient(500deg,#89ff00,#060c21,#00bcd4);
  box-shadow: 0 0 10px #89ff00, 0 0 10px #89ff00, 0 0 10px #89ff00;
  
  filter: drop-shadow(25px 25px 25px #060c21);
  }
         
  div.polaroid
  {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  }
  img:hover
  {
  opacity: 2;
  filter: alpha(opacity=30);
  box-shadow: 0 0 10px #ccc;
  border: 5px solid green;
   } 

</style>





</head>
<body>


<?php
$servername = "localhost";
$username = "root";
$password ="";
$dbname = "medicare";


$con= mysqli_connect($servername,$username,$password,$dbname);
$sql ="select * from medicines";


 $result =mysqli_query($con, $sql);
 
echo "<table>";

while($row=mysqli_fetch_array($result))
{
   echo "<tr>";
   echo "<td>";
	    
?> <a href="stock.php"><img src="<?php echo $row["medicine_image"];    ?>" height="200" width="200";>
  <?php echo "</td>";
  echo "<td>"; echo $row["stock"]; echo "\r\n"; echo $row["price"]; "</td>";
  echo "</tr>";
  

}
 echo "</table>";
     ?>


</body>
</html>