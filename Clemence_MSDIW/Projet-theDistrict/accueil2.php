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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./assets/css/style2.css">
</head>

<body>
    <nav>
        <?php
        include './assets/php/nav.php';
        ?>
    </nav>
        <?php
        include './assets/php/banner.php';
        ?>
    <section class="cc-menu py-5 dancing text-light ">
        <!-- <div class="container">
            <div class="row">
                <h3 class="text-center text-light Lugrasimo mb-4">Nos Variétés</h3>
                <div class="card bg-transparent text-center">
                    <div class="card-header redressed fs-4">
                        <ul class="nav nav-tabs justify-content-center card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="true" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body text-light">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="row">
            <div class="col">
                <div class="card">
                    <img src="../assets/img/cheesburger.jpg" class="card-img-top" alt="cheesburger">
                    <div class="card-body">
                        <h5 class="card-title">Cheesburger</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../assets/img/cesar_salad.jpg" class="card-img-top" alt="cesar">
                    <div class="card-body">
                        <h5 class="card-title">Salade Cesar</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../assets/img/courgettes_farcies.jpg" class="card-img-top" alt="courgette">
                    <div class="card-body">
                        <h5 class="card-title">Courgettes Farcies</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../assets/img/spaghetti-legumes.jpg" class="card-img-top" alt="spaghetti-legumes">
                    <div class="card-body">
                        <h5 class="card-title">Spaghetti-legumes</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>