@extends('painel.main')
@section('title', 'Adicionar Slide')
@section('content')
    <div class="box_content">
        <h2><i class="fas fa-pen"></i> Adicionar Slide</h2>

        <form method="post" action="{{ route('store.slide') }}" enctype="multipart/form-data">
            @csrf
            <div class="form_group">
                <label>Nome do slide: <p><input name="nome" type="text" required></p></label>
            </div>
            <!-- form_group -->
            <div class="form_group">
                <label>
                    Imagem:
                    <p><input name="image" type="file" require></p>
                </label>
            </div>
            <!-- form_group -->
            <div class="form_group">
                <p><input type="submit" value="Atualizar"></p>
            </div>
            <!-- form_group -->
        </form>
    </div>
@endsection
