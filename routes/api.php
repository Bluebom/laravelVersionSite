<?php

use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\SlideController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Slide
Route::post('/cadastrar/slide', [SlideController::class, 'store'])->name('store.slide');
Route::put('/editar/slide/{id}', [SlideController::class, 'update'])->name('update.slide');
Route::delete('/deletar/slide/{id}', [SlideController::class, 'destroy']);

// Servico
Route::post('/cadastrar/servico', [ServiceController::class, 'store'])->name('store.service');
Route::put('/editar/servico/{id}', [ServiceController::class, 'update'])->name('update.service');
Route::delete('/deletar/servico/{id}', [ServiceController::class, 'destroy']);

// Skill
Route::post('/cadastrar/habilidade', [SkillController::class, 'store'])->name('store.skill');
Route::put('/editar/habilidade/{id}', [SkillController::class, 'update'])->name('update.skill');
Route::delete('/deletar/habilidade/{id}', [SkillController::class, 'destroy']);