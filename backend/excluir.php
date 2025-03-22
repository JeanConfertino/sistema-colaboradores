<?php
include 'db_config.php';

$dados = json_decode(file_get_contents("php://input"), true);

if ($dados && isset($dados['id'])) {
    $sql = "DELETE FROM colaboradores WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $sucesso = $stmt->execute([$dados['id']]);

    echo json_encode(["status" => $sucesso ? "sucesso" : "erro"]);
} else {
    echo json_encode(["status" => "erro"]);
}
