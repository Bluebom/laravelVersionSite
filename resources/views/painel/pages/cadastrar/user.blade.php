@extends('painel.main')
@section('title', 'Adicionar Usuário')
@section('content')
    <div class="box_content">
        <h2><i class="fas fa-pen"></i> Adicionar Usuário</h2>

        @if ($errors->any())
            @foreach ($errors->all() as $error)
                <div class="erro_box"><i class="fas fa-times"></i>{{ $error }}</div>
            @endforeach
        @endif

        <form method="post" action="{{ route('register.do') }}">
            @csrf
            <div class="form_group">
                <label>Nome: <p><input name="name" type="text" required></p></label>
            </div>
            <!-- form_group -->

            <div class="form_group">
                <label>Email: <p><input name="email" type="email" required></p></label>
            </div>
            <!-- form_group -->

            <div class="form_group">
                <label>Senha: <p><input name="password" type="password" required></p></label>
            </div>
            <!-- form_group -->

            <div class="form_group">
                <label>Confirmar Senha: <p><input name="password_confirmation" type="password" required></p></label>
            </div>
            <!-- form_group -->

            {{-- <div class="form_group">
                <label class="down-arrow">Cargo:
                    <p><select name="cargo">
                            <option value="0" selected>Normal</option>
                            <option value="1">Sub Administrador</option>
                        </select></p>
                </label>
            </div>
            <!-- form_group --> --}}

            {{-- <div class="form_group">
                <label>
                    Imagem:
                    <p><input name="img" type="file" require></p>
                </label>
            </div> --}}
            <!-- form_group -->
            <div class="form_group">
                <p><input type="submit" value="Atualizar"></p>
            </div>
            <!-- form_group -->
        </form>
    </div>
@endsection
