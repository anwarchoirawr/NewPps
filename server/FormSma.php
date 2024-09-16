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
$metodePembayaran = isset($_POST['metodePembayaran']) ? $_POST['metodePembayaran'] : '';
$buktiPembayaran = null;

if (empty($namaAnak) || empty($namaWali) || empty($umur) || empty($noHpWali) || empty($metodePembayaran)) {
    echo json_encode(["error" => "Semua field harus diisi"]);
    exit;
}

if ($umur <= 0) {
    echo json_encode(["error" => "Umur harus lebih dari 0"]);
    exit;
}

if ($metodePembayaran === 'Transfer Bank' && (!isset($_FILES['buktiPembayaran']) || $_FILES['buktiPembayaran']['error'] !== UPLOAD_ERR_OK)) {
    echo json_encode(["error" => "Gagal meng-upload bukti pembayaran"]);
    exit;
}

if ($metodePembayaran === 'Transfer Bank') {
    $buktiPembayaran = file_get_contents($_FILES['buktiPembayaran']['tmp_name']);
}

$stmt = $conn->prepare("INSERT INTO pendaftaran_sma (nama_anak, nama_wali, umur, no_hp_wali, metode_pembayaran, bukti_pembayaran) VALUES (?, ?, ?, ?, ?, ?)");
if ($stmt === false) {
    die(json_encode(["error" => "Gagal menyiapkan statement: " . $conn->error]));
}

$stmt->bind_param("ssisbs", $namaAnak, $namaWali, $umur, $noHpWali, $metodePembayaran, $buktiPembayaran);

if ($stmt->execute()) {
    echo json_encode(["message" => "Barakallahu fikum! Data berhasil dikirim, Silahkan menunggu Admin akan menghubungi anda"]);
} else {
    echo json_encode(["error" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
