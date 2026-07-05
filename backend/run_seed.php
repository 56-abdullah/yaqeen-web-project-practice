<?php
    // One-off seeder. Run from CLI:  php run_seed.php
    // Uses the same mysqli connection the app uses.
    include("connection.php");

    $sql = file_get_contents("seed_data.sql");

    if (mysqli_multi_query($connect, $sql)) {
        do {
            if ($result = mysqli_store_result($connect)) {
                mysqli_free_result($result);
            }
        } while (mysqli_more_results($connect) && mysqli_next_result($connect));
        echo "SEED OK\n";
    } else {
        echo "SEED FAILED: " . mysqli_error($connect) . "\n";
    }

    // show counts
    $tables = ["products", "testimonials", "users"];
    foreach ($tables as $t) {
        $r = mysqli_query($connect, "SELECT COUNT(*) AS n FROM $t");
        $row = mysqli_fetch_assoc($r);
        echo "$t = " . $row["n"] . "\n";
    }
?>
