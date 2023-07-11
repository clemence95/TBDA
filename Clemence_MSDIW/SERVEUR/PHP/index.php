<html>

<body>
    <?php
    // je suis un commentaire
    echo "Bonjour le monde<br>";
    echo    $_SERVER["SERVER_ADDR"];
    echo    $_SERVER["REMOTE_ADDR"];
    echo "<br>";
    for (   $i = 1;     $i<=150;    $i += 2){
        echo    $i . "";
    }
    // for (   $i = 0;     $i<=5;    $i += 1){
    //     echo  "Je dois faire des sauvegardes régulières de mes fichiers";
    // }
    ?>
</body>

</html>