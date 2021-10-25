<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\SlideController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('franklinhenrique.sections.home');
// })->name('home');

Route::get('/', [SiteController::class, 'index'])->name('home');

// Route::get('/admin', [AuthController::class, 'dashboard'])->name('admin');
// Route::get('/admin/login', [AuthController::class, 'showLoginForm'])->name('admin.login');
// Route::post('/admin/login', [AuthController::class, 'login'])->name('admin.login.do');
// Route::get('/admin/logout', [AuthController::class, 'logout'])->name('admin.logout.do');


Route::get('/dashboard', function () {
    return view('painel.pages.home');
})->middleware(['auth', 'verified'])->name('dashboard');

// Slides
Route::get('/dashboard/listar/slide', [SlideController::class, 'index'])->name('dashboard.list.slide');
Route::get('/dashboard/cadastrar/slide', [SlideController::class, 'create'])->name('dashboard.add.slide');
Route::get('/dashboard/editar/slide/{id}', [SlideController::class, 'edit']);

// Services
Route::get('/dashboard/listar/servico', [ServiceController::class, 'index'])->name('dashboard.list.service');
Route::get('/dashboard/cadastrar/servico', [ServiceController::class, 'create'])->name('dashboard.add.service');
Route::get('/dashboard/editar/servico/{id}', [ServiceController::class, 'edit'])->name('dashboard.edit.service');

// Skill
Route::get('/dashboard/listar/habilidade', [SkillController::class, 'index'])->name('dashboard.list.skill');
Route::get('/dashboard/cadastrar/habilidade', [SkillController::class, 'create'])->name('dashboard.add.skill');
Route::get('/dashboard/editar/habilidade/{id}', [SkillController::class, 'edit'])->name('dashboard.edit.skill');

require __DIR__ . '/auth.php';
