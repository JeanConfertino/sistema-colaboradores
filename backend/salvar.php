<?php
include 'db_config.php';

$dados = json_decode(file_get_contents("php://input"), true);

if ($dados) {
    $sql = "INSERT INTO colaboradores (nome, cargo, departamento, data_admissao) VALUES (?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        $dados['nome'],
        $dados['cargo'],
        $dados['departamento'],
        $dados['data_admissao']
    ]);
    echo json_encode(["status" => "sucesso"]);
} else {
    echo json_encode(["status" => "erro"]);
}
