<?php 
	session_start();
	// Create connection
	$db = mysqli_connect('localhost', 'root', '', 'myDatabase');

	// Initialize variables
	$creator = "";
	$title = "";
        $type = "";
	$identifier = "";
	$date = "";
	$language = "";
	$description = "";

	$id = 0;
	$update = false;

	// Check connection
/*
	if ($db->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
*/

// Save Book
	if (isset($_POST['save'])) {
		$creator = $_POST['creator'];
		$title = $_POST['title'];
		$type = $_POST['type'];
		$identifier = $_POST['identifier'];
		$date = $_POST['date'];
		$language = $_POST['language'];
		$description = $_POST['description'];

		mysqli_query($db, "INSERT INTO eBook_MetaData (creator, title, type, identifier, date, language, description) VALUES ('$creator', '$title', '$type', '$identifier', '$date', '$language', '$description')"); 
		$_SESSION['message'] = "Book saved"; 
		header('location: index.php');
	}

// Update book 

if (isset($_POST['update'])) {
		$id = $_POST['id'];
		$creator = $_POST['creator'];
		$title = $_POST['title'];
		$type = $_POST['type'];
		$identifier = $_POST['identifier'];
		$date = $_POST['date'];
		$language = $_POST['language'];
		$description = $_POST['description'];

	mysqli_query($db, "UPDATE eBook_MetaData SET creator='$creator', title='$title', type='$type', identifier='$identifier', date='$date', language='$language', description='$description' WHERE id=$id");
	$_SESSION['message'] = "Book updated!"; 
	header('location: index.php');
}

// Delete Book
if (isset($_GET['del'])) {
	$id = $_GET['del'];
	mysqli_query($db, "DELETE FROM eBook_MetaData WHERE id=$id");
	$_SESSION['message'] = "Book deleted!"; 
	header('location: index.php');
}

?>

