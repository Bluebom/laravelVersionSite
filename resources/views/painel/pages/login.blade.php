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
    <link rel="stylesheet" href="{{ asset('painel/assets/css/style.css') }}">
    <title>Login</title>
</head>

<body>
    <div class="box_login">
        <h2>Painel de Controle</h2>
        <form action="{{ route('login') }}" method="POST">
            @csrf
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Senha" required>
            <div class="form_group_login">
                <input type="submit" value="Logar">
                <label class="container">Lembrar-me
                    <input type="checkbox" name="remember">
                    <span class="checkmark"></span>
                </label>
            </div>
        </form>

    </div> <!-- box_login -->
</body>

</html>
