<html>

<body>
    <?php
    // je suis un commentaire
    echo "Bonjour le monde<br>";
    // echo     $_SERVER [SERVER_ADDR];
    // ECHO     $_SERVER [REMOTE_ADDR];
    echo "<br>";
    for ($i = 1; $i <= 150; $i += 2) {
        echo    $i . "<br>";
    }
    for ($i = 0; $i < 500; $i++) {
        echo  "Je dois faire des sauvegardes régulières de mes fichiers<br>";
    }
    // Création du tableau
    $tableau = array();

    // Remplissage du tableau avec les résultats de multiplication
    for ($i = 0; $i <= 9; $i++) {
        for ($j = 0; $j <= 9; $j++) {
            $tableau[$i][$j] = $i * $j;
        }
    }

    // Affichage du tableau
    echo "<table style='border-collapse: collapse;'>";
    for ($i = 0; $i <= 9; $i++) {
        echo "<tr>";
        for ($j = 0; $j <= 9; $j++) {
            echo "<td style='border: 1px solid black; padding: 5px;'>" . $tableau[$i][$j] . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
    ?>
</body>

</html>