<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TheDestrit</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lugrasimo&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
    <?php
    include './assets/php/nav.php';
    ?>

<section class="banner d-flex pt-5">
        <div class="container-fluid my-5 py-4 d-flex justify-content-center">
            <div class="row ">
                <div class=" video-container d-flex justify-content-center">
                    <video id="myVideo" class="d-block video rounded-5 " autoplay muted loop>
                        <source src="../assets/pizza-fond.mp4" type="video/mp4">
                        Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
                    </video>
                </div>
                <div class="col-md-12">
                    <h1 class="text-center dancing">The Destrict</h1>
                </div>
                <div class="col-md-6">
                    <p class="text-capitalize banner-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit Vitae
                        officiis accusamus</p><br>
                    <p>
                        <buttom class="btn btn-order btn-lg me-5 dancing">Commander maintenant</buttom>
                        <button class="btn btn-outline-info dancing">Réserver</button>
                </div>
            </div>
        </div>
    </section>
</body>

</html>