@extends('painel.main')
@section('title', 'Adicionar Habilidade')
@section('content')
    <div class="box_content">
        <h2><i class="fas fa-pen"></i> Adicionar Habilidade</h2>
        <form method="post" action="{{ route('update.skill', $skill) }}">
            @csrf
            @method('PUT')
            <div class="form_group">
                <label>Nome da habilidade: <p><input name="nome" type="text" value="{{ $skill->nome }}" required></p>
                </label>
            </div>
            <!-- form_group -->

            <div class="form_group range">
                <label>
                    Nível com a habilidade:
                    <p><input name="nivel" type="range" value="{{ $skill->nivel }}" require max="100" min="0" step="5">
                    </p>
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
