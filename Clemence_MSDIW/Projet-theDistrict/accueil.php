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
                        <source src="./assets/img-thedistrict/pizza-fond.mp4" type="video/mp4">
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

    <section class="Catégories bg-dark-subtil Lugrasimo py-5">
        <h2 class="text-center Lugrasimo">Catégories</h2>
        <div class="container d-flex">
            <div class="row">
                <div class="card mb-3 border-0 ">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-3">
                            <img src="/Clemence_MSDIW/Projet-theDistrict/assets/img-thedistrict/salade_cat.jpg" class="img-fluid rounded-start" alt="Salade">
                        </div>
                        <div class="col-md-3">
                            <div class="card-body">
                                <a href="#">
                                    <h5 class="card-title Lugrasimo text-center">Nos Salades</h5>
                                </a>
                                </p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card mb-12">
                        <div class="row">
                            <div class="col-md-12">
                                <div id="carouselExampleCaptions" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions"
                                            data-bs-slide-to="0" class="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="/Clemence_MSDIW/Projet-theDistrict/assets/img-thedistrict/pizza.jpg" class="d-block w-100 img-fluid"
                                                alt="Pizza">
                                            <div class="carousel-caption d-md-block">
                                                <a class="Lugrasimo" href="#">
                                                    <h5 class="Lugrasimo">Pizza</h5>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/Clemence_MSDIW/Projet-theDistrict/assets/img-thedistrict/pasta_cat.jpg" class="d-block w-100 img-fluid"
                                                alt="Pasta">
                                            <div class="carousel-caption d-md-block">
                                                <a class="Lugrasimo" href="#">
                                                    <h5>Pasta</h5>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/Clemence_MSDIW/Projet-theDistrict/assets/img-thedistrict/burger.jpg" class="d-block w-100 img-fluid"
                                                alt="Burger">
                                            <div class="carousel-caption d-md-block">
                                                <a class="Lugrasimo" href="#">
                                                    <h5>Burger</h5>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-4">
                    <div class="card mb-3">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-3">
                                <div class="card-body">
                                    <a href="#">
                                        <h5 class="card-title Lugrasimo text-center">Asia</h5>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <img src="/Clemence_MSDIW/Projet-theDistrict/assets/img-thedistrict/asian_food_cat.jpg" class="img-fluid rounded-start" alt="Asia">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>


</body>

</html>