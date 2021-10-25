@extends('painel.main')
@section('title', 'Editar Serviço')
@section('content')
    <div class="box_content">
        <h2><i class="fas fa-pen"></i> Editar Serviço</h2>

        <form method="post" action="{{ route('update.service', $service) }}">
            @csrf
            @method('PUT')
            <div class="form_group">
                <label>Ícone para o serviço: <p><input type="text" name="icon" value="{{ $service->icon }}" required></p>
                </label>
            </div>
            <!-- form_group -->

            <div class="form_group">
                <label>Descrição do serviço: <p><textarea name="servico" required>{{ $service->servico }}</textarea>
                    </p></label>
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
