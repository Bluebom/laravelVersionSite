<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    <link rel="stylesheet" href="{{ asset('/painel/assets/css/style.css') }}">
    <title>@yield('title')</title>
</head>

<body>

    {{-- Loaders --}}
    <div class="cont" id="deleteLoader">
        <div class="paper"></div>
        <button>
            <div class='loader'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>Deleting
        </button>
        <div class="g-cont">
            <div class="garbage"></div>
            <div class="garbage"></div>
            <div class="garbage"></div>
            <div class="garbage"></div>
            <div class="garbage"></div>
            <div class="garbage"></div>
            <div class="garbage"></div>
        </div>
    </div>

    {{-- Loaders --}}

    <section class="topo_painel">
        <aside>
            <div class="box_user">
                <div class="avatar_user">
                    <i class="fas fa-user"></i>
                </div>
                <div class="nome_user">
                    <p>Franklin Henrique</p>
                    <span>Administrador</span>
                </div>
                <!-- nome_user -->
            </div>
            <!-- box_user -->
            <div class="items_menu">
                <h2>Cadastro</h2>
                <a href="{{ route('dashboard.add.skill') }}">Cadastrar Habilidade</a>
                <a href="{{ route('dashboard.add.service') }}">Cadastrar Serviço</a>
                <a href="{{ route('dashboard.add.slide') }}">Cadastrar Slides</a>
                <h2>Gestão</h2>
                <a href="{{ route('dashboard.list.skill') }}">Listar Habilidades</a>
                <a href="{{ route('dashboard.list.service') }}">Listar Serviços</a>
                <a href="{{ route('dashboard.list.slide') }}">Listar Slides</a>
                <h2>Administração do painel</h2>
                <a href="https://franklinhenrique.com/painel/editUser">Editar Usuário</a>
                <a href="{{ route('register') }}">Adicionar Usuário</a>
                <h2>Configuração Geral</h2>
                <a href="https://franklinhenrique.com/painel/#">Editar</a>
            </div>
        </aside>
        <header>
            <div class="center">
                <div class="menu_btn">
                    <span>&equiv;</span>
                    <span>&times;</span>
                </div>
                <!-- menu_btn -->

                <div class="home_btn">
                    <a href="{{ route('dashboard') }}"><i class="fas fa-home"></i></a>
                </div>

                <div class="loggout">
                    <span>Sair</span>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit"><i class="fas fa-sign-out-alt"></i></button>
                    </form>
                </div>
                <!-- loggout -->
            </div>
            <!-- center -->

        </header>
    </section>
    <div class="painel_content">
        @yield('content')
    </div>
    <!-- painel_content -->
    <script src="{{ asset('/painel/assets/js/script.js') }}"></script>
</body>

</html>
