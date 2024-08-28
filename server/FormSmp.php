<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pendaftaran_sekolah";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$namaAnak = isset($_POST['namaAnak']) ? $_POST['namaAnak'] : '';
$namaAyah = isset($_POST['namaAyah']) ? $_POST['namaAyah'] : '';
$namaIbu = isset($_POST['namaIbu']) ? $_POST['namaIbu'] : '';
$umur = isset($_POST['umur']) ? (int)$_POST['umur'] : 0;
$asal = isset($_POST['asal']) ? $_POST['asal'] : '';

if (empty($namaAnak) || empty($namaAyah) || empty($namaIbu)) {
    echo json_encode(["error" => "Nama anak, ayah, atau ibu tidak boleh kosong"]);
    exit;
}

if ($umur <= 0) {
    echo json_encode(["error" => "Umur harus lebih dari 0"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO pendaftaran_smp (nama_anak, nama_ayah, nama_ibu, umur, asal_sekolah) VALUES (?, ?, ?, ?, ?)");
if ($stmt === false) {
    die(json_encode(["error" => "Gagal menyiapkan statement: " . $conn->error]));
}

$stmt->bind_param("sssis", $namaAnak, $namaAyah, $namaIbu, $umur, $asal);

if ($stmt->execute()) {
    echo json_encode(["Barakallahu fikum! Data berhasil disimpan, silahkan untuk konfirmasi Admin"]);
} else {
    echo json_encode(["error" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
    