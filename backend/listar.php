<?php
include 'db_config.php';

$sql = "SELECT * FROM colaboradores ORDER BY id DESC";
$stmt = $pdo->query($sql);
$dados = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($dados);
