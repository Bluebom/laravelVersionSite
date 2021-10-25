@extends('painel.main')
@section('title', 'Serviços Cadastrados')
@section('content')
    <div class="box_content">
        <h2><i class="fas fa-id-card"></i> Serviços Cadastrados</h2>
        <table>
            <thead>
                <th>Nome</th>
                <th>Nível</th>
                <th>Editar</th>
                <th>Deletar</th>
            </thead>
            <tbody>
                @foreach ($skills as $skill)

                    <tr>
                        <td>{{ $skill->nome }}</td>
                        <td class="s_icones">{{ $skill->nivel }}</td>
                        <td><a action="edite" href="{{ route('dashboard.edit.skill', $skill) }}" class="btn_edit"><i
                                    class="fas fa-pen"></i></a></td>
                        <td><a deleteSkill="{{ $skill->id }}" href="#" class="btn_delete"><i
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
