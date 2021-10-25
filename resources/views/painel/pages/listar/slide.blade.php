@extends('painel.main')
@section('title', 'Slides Cadastrados')
@section('content')
    <div class="box_content">
        <h2><i class="fas fa-id-card"></i> Slides Cadastrados</h2>
        <table>
            <thead>
                <th>Nome</th>
                <th>Slide</th>
                <th>Editar</th>
                <th>Deletar</th>
            </thead>
            <tbody>
                @foreach ($slides as $slide)
                    <tr>
                        <td>{{ $slide->nome }}</td>
                        <td><img class="slide" src="{{ asset('/painel/assets/img/slides') . '/' . $slide->img }}"
                                alt="miniatura do slide"></td>
                        <td><a action="edite" href="/dashboard/editar/slide/{{ $slide->id }}" class="btn_edit"><i
                                    class="fas fa-pen"></i></a></td>
                        <td><a deleteSlide="{{ $slide->id }}" href="#" class="btn_delete"><i
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
