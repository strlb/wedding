<?php
    $name = $_POST['guest_name'];
    $surname = $_POST['guest_surname'];
    $car = $_POST['car_status'];
    $day = $_POST['day_status'];
    $wish = $_POST['guest_wishes'];
    if($name){
        echo $name." ".$surname." ".$car." ".$day." ".$wish;
    }
    else{
      echo $name;  
    }
    
?>