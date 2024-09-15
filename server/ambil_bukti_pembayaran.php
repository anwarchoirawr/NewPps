<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pendaftaran_sekolah";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Mengambil ID pendaftaran dari query string
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

if ($id <= 0) {
    echo json_encode(["error" => "ID tidak valid"]);
    exit;
}

// Query untuk mengambil bukti pembayaran (BLOB) berdasarkan ID
$query = "SELECT bukti_pembayaran FROM pendaftaran_smp WHERE id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $id);

$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    
    // Mengatur header untuk menampilkan gambar atau file
    header("Content-Type: image/jpeg"); // Sesuaikan dengan tipe file yang diupload (image/jpeg, image/png, application/pdf, dll.)
    
    // Menampilkan data biner (BLOB)
    echo $row['bukti_pembayaran'];
} else {
    echo json_encode(["error" => "Bukti pembayaran tidak ditemukan"]);
}

$stmt->close();
$conn->close();

?>
