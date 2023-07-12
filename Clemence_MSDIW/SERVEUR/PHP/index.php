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

    $capitales = array(
        "Bucarest" => "Roumanie",
        "Bruxelles" => "Belgique",
        "Oslo" => "Norvège",
        "Ottawa" => "Canada",
        "Paris" => "France",
        "Port-au-Prince" => "Haïti",
        "Port-d'Espagne" => "Trinité-et-Tobago",
        "Prague" => "République tchèque",
        "Rabat" => "Maroc",
        "Riga" => "Lettonie",
        "Rome" => "Italie",
        "San José" => "Costa Rica",
        "Santiago" => "Chili",
        "Sofia" => "Bulgarie",
        "Alger" => "Algérie",
        "Amsterdam" => "Pays-Bas",
        "Andorre-la-Vieille" => "Andorre",
        "Asuncion" => "Paraguay",
        "Athènes" => "Grèce",
        "Bagdad" => "Irak",
        "Bamako" => "Mali",
        "Berlin" => "Allemagne",
        "Bogota" => "Colombie",
        "Brasilia" => "Brésil",
        "Bratislava" => "Slovaquie",
        "Varsovie" => "Pologne",
        "Budapest" => "Hongrie",
        "Le Caire" => "Egypte",
        "Canberra" => "Australie",
        "Caracas" => "Venezuela",
        "Jakarta" => "Indonésie",
        "Kiev" => "Ukraine",
        "Kigali" => "Rwanda",
        "Kingston" => "Jamaïque",
        "Lima" => "Pérou",
        "Londres" => "Royaume-Uni",
        "Madrid" => "Espagne",
        "Malé" => "Maldives",
        "Mexico" => "Mexique",
        "Minsk" => "Biélorussie",
        "Moscou" => "Russie",
        "Nairobi" => "Kenya",
        "New Delhi" => "Inde",
        "Stockholm" => "Suède",
        "Téhéran" => "Iran",
        "Tokyo" => "Japon",
        "Tunis" => "Tunisie",
        "Copenhague" => "Danemark",
        "Dakar" => "Sénégal",
        "Damas" => "Syrie",
        "Dublin" => "Irlande",
        "Erevan" => "Arménie",
        "La Havane" => "Cuba",
        "Helsinki" => "Finlande",
        "Islamabad" => "Pakistan",
        "Vienne" => "Autriche",
        "Vilnius" => "Lituanie",
        "Zagreb" => "Croatie"
    );
    
    ksort($capitales); // Trie le tableau par ordre alphabétique des clés (capitales)
    
    foreach ($capitales as $capitale => $pays) {
        echo $capitale . ' => ' . $pays . '<br>';
    }
    ?>
</body>

</html>