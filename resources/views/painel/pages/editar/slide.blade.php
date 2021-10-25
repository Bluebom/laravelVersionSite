@extends('painel.main')
@section('title', 'Adicionar Usuário')
@section('content')
    <div class="box_content">
        <h2><i class="fas fa-pen"></i> Editar Slide</h2>
        <form method="post" action="{{ route('update.slide', $slide) }}" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="form_group">
                <label>Nome: <p><input name="nome" type="text" value="{{ $slide->nome }}" required></p></label>
            </div>
            <!-- form_group -->

            <div class="form_group">
                <label>
                    Imagem:
                    <p><input name="image" type="file"></p>
                </label>
            </div>
            <!-- form_group -->
            <div class="form_group">
                <p><input name="{{ $slide->id }}" type="submit" value="Atualizar"></p>
            </div>
            <!-- form_group -->
        </form>
    </div>
@endsection
