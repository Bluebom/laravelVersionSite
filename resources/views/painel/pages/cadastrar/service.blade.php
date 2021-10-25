@extends('painel.main')
@section('title', 'Adicionar Serviço')
@section('content')
    <div class="box_content">
        <h2><i class="fas fa-pen"></i> Adicionar Serviço</h2>

        <form method="post" action="{{ route('store.service') }}">
            @csrf
            <div class="form_group">
                <label>Ícone para o serviço: <p><input type="text" name="icon" required></p></label>
            </div>
            <!-- form_group -->

            <div class="form_group">
                <label>Descrição do serviço: <p><textarea name="servico" required></textarea></p></label>
            </div>
            <!-- form_group -->

            <div class="form_group">
                <p>
                    <input type="submit" value="Atualizar">
                </p>
            </div>
            <!-- form_group -->
        </form>
    </div>
@endsection
