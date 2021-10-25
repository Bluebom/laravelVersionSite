@extends('painel.main')
@section('title', 'Dashboard')
@section('content')
    <div class="center">
        <div class="box_content">
            <h1> <i class="fas fa-cogs"></i> Painel de Controle - Franklin Henrique</h1>
            <div class="div_content_wrap">
                <div class="users_on">
                    <h2>Usuários Online</h2>
                    <span>1</span>
                </div>
                <div class="all_visits">
                    <h2>Total de Visitas</h2>
                    <span>3527</span>
                </div>
                <div class="today_visits">
                    <h2>Visitas Hoje</h2>
                    <span>20</span>
                </div>
            </div>
        </div>
        <div class="box_content">
            <h1> <i class="fas fa-users"></i> Usuários Online no site</h1>
            <table>
                <th>IP</th>
                <th>Última ação</th>
                <tr>
                    <td>189.124.247.236</td>
                    <td>24/10/2021 16:53</td>
                </tr>
            </table>
        </div>
        <div class="box_content">
            <h1> <i class="fas fa-users-cog"></i> Usuários do Painel</h1>
            <table>
                <th>Nome</th>
                <th>Cargo</th>
                <tr>
                    <td>admin</td>
                    <td>Administrador</td>
                </tr>
                <tr>
                    <td>teste</td>
                    <td>Normal</td>
                </tr>
            </table>
        </div>
    @endsection
