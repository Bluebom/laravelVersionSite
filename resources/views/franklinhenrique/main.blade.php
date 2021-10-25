<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfólio web para captação de clientes">
    <meta name="keywords"
        content="sistemas web ,web developer, web, developer, design sites, sites, institucionais, sites institucionais, landpage,land page">
    <meta name="author" content="Franklin Henrique">
    <link rel="stylesheet" href="{{ asset('/franklinhenrique/assets/css/style.css') }}">
    <link rel="apple-touch-icon" sizes="180x180"
        href="{{ asset('/franklinhenrique/assets/img/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32"
        href="{{ asset('/franklinhenrique/assets/img/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16"
        href="{{ asset('/franklinhenrique/assets/img/favicon-16x16.png') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet preload prefetch" as="style" onload="this.rel = 'stylesheet'"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Serif+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap"
        crossorigin="anonymous">
    <title>Franklin Henrique</title>
</head>

<body>
    <section class="header-mobile">
        <div class="headerToWork"></div>
        <span class="menu_hamburguer e">&equiv;</span>
        <span class="menu_hamburguer x">&times;</span>

        {{-- header-mobile --}}
        <header class="mobile w100">
            <nav>
                <ul>
                    <li><a title="Home" href="{{ route('home') }}#Home" class="marked">Home</a></li>
                    <li><a title="Sobre" href="{{ route('home') }}#About">Sobre</a></li>
                    <li><a title="Serviços" href="{{ route('home') }}#Services">Serviços</a></li>
                    <li><a title="Portfólio" href="{{ route('home') }}#Portfolio">Portfólio</a></li>
                    <li><a title="Contato" href="{{ route('home') }}#Contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    </section>

    <section class="header-desktop">
        {{-- header-desktop --}}
        <header class="desktop w100">
            <nav>
                <ul>
                    <li><a title="Home" href="{{ route('home') }}#Home" class="marked">Home</a></li>
                    <li><a title="Sobre" href="{{ route('home') }}#About">Sobre</a></li>
                    <li><a title="Serviços" href="{{ route('home') }}#Services">Serviços</a></li>
                    <li><a title="Portfólio" href="{{ route('home') }}#Portfolio">Portfólio</a></li>
                    <li><a title="Contato" href="{{ route('home') }}#Contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    </section>
    <main class="center">
        @yield('conteudo')
    </main>
    <script src="{{ asset('/franklinhenrique/assets/js/script.js') }}"></script>
    <script src="{{ asset('/franklinhenrique/assets/js/menuChangeOnScroll.js') }}"></script>
    <script src="{{ asset('/franklinhenrique/assets/js/smothScrollOnClick.js') }}"></script>

</body>

</html>
