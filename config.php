<?php
    session_start(); 

    $hostname = 'localhostsql113.infinityfree.com';
    $username = 'id21041626_pad';
    $password = '#padbsm123';
    $database = 'usuarios';


    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica a conexão
    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }
?>
