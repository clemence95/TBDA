<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LesBasesenPhp</title>
</head>

<body>

    <body>
        <?php
        // je suis un commentaire
        echo "Bonjour le monde<br>";
        // echo     $_SERVER [SERVER_ADDR];
        // echo    $_SERVER [REMOTE_ADDR];
        echo "<br>";

        // Affichage du tableau
        echo "<table style='border-collapse: collapse;'>";
        for ($i = 0; $i <= 9; $i++) {
            echo "<tr>";
            for ($j = 0; $j <= 9; $j++) {
                echo "<td style='border: 1px solid black; padding: 5px;'>" . $tableau[$i][$j] . "</td>";
            }
        }

        ?>
    </body>

</html>