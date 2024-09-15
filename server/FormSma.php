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
$namaWali = isset($_POST['namaWali']) ? $_POST['namaWali'] : '';
$umur = isset($_POST['umur']) ? (int)$_POST['umur'] : 0;
$noHpWali = isset($_POST['noHpWali']) ? $_POST['noHpWali'] : '';
$asalSekolah = isset($_POST['asalSekolah']) ? $_POST['asalSekolah'] : '';

if (empty($namaAnak) || empty($namaWali) || empty($umur) || empty($noHpWali) || empty($asalSekolah)) {
    echo json_encode(["error" => "Semua field harus diisi"]);
    exit;
}

if ($umur <= 0) {
    echo json_encode(["error" => "Umur harus lebih dari 0"]);
    exit;
}

if (!isset($_FILES['buktiPembayaran']) || $_FILES['buktiPembayaran']['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(["error" => "Gagal meng-upload bukti pembayaran"]);
    exit;
}

$buktiPembayaran = file_get_contents($_FILES['buktiPembayaran']['tmp_name']);

$stmt = $conn->prepare("INSERT INTO pendaftaran_sma (nama_anak, nama_wali, umur, no_hp_wali, asal_sekolah, bukti_pembayaran) VALUES (?, ?, ?, ?, ?, ?)");
if ($stmt === false) {
    die(json_encode(["error" => "Gagal menyiapkan statement: " . $conn->error]));
}

$stmt->bind_param("ssisbs", $namaAnak, $namaWali, $umur, $noHpWali, $asalSekolah, $buktiPembayaran);

if ($stmt->execute()) {
    echo json_encode(["message" => "Barakallahu fikum! Data berhasil disimpan, Silahkan menunggu Admin akan menghubungi anda"]);
} else {
    echo json_encode(["error" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
