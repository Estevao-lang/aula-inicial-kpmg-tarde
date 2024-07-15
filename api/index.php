<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if (isset($_GET['cep'])) {
    $cep = $_GET['cep'];
    $url = "https://viacep.com.br/ws/{$cep}/json/";
    $response = file_get_contents($url);
    echo $response;
} else {
    echo json_encode(['error' => 'CEP não fornecido']);
}
