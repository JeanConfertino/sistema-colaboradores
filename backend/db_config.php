<?php
$host = 'localhost';
$db   = 'sistema_colaboradores';
$user = 'root';
$pass = '06525145'; // coloque sua senha real aqui
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

try {
    $pdo = new PDO($dsn, $user, $pass);
} catch (PDOException $e) {
    echo 'Erro na conexão: ' . $e->getMessage();
    exit();
}
?>
