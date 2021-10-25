@extends('painel.main')
@section('title', 'Serviços Cadastrados')
@section('content')
    <div class="box_content">
        <h2><i class="fas fa-id-card"></i> Serviços Cadastrados</h2>
        <table>
            <thead>
                <th>Serviços</th>
                <th>Ícones</th>
                <th>Editar</th>
                <th>Deletar</th>
            </thead>
            <tbody>
                @foreach ($services as $service)

                    <tr>
                        <td>{{ substr($service->servico, 0, 36) . '...' }}</td>
                        <td class="s_icones"><i class="{{ $service->icon }}"></i></td>
                        <td><a action="edite" href="{{ route('dashboard.edit.service', $service) }}"
                                class="btn_edit"><i class="fas fa-pen"></i></a></td>
                        <td><a deleteService="{{ $service->id }}" href="#" class="btn_delete"><i
                                    class="fas fa-times"></i></a></td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <div class="paginacao">
            <a class="selected" href="#">1</a>
        </div>
    </div><!-- box_content -->
@endsection
