<?php
include 'db_config.php';

$dados = json_decode(file_get_contents("php://input"), true);

if ($dados && isset($dados['id'])) {
    $sql = "UPDATE colaboradores SET nome = ?, cargo = ?, departamento = ?, data_admissao = ? WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $sucesso = $stmt->execute([
        $dados['nome'],
        $dados['cargo'],
        $dados['departamento'],
        $dados['data_admissao'],
        $dados['id']
    ]);

    echo json_encode(["status" => $sucesso ? "sucesso" : "erro"]);
} else {
    echo json_encode(["status" => "erro"]);
}
