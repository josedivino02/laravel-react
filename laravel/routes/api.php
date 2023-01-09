<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserController;

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

Route::apiResource('users', \App\Http\Controllers\api\UserController::class);
Route::apiResource('login', \App\Http\Controllers\api\LoginController::class);

Route::get('/user/userSituation/{sit?}', [UserController::class, 'userSituation']);
Route::get('/user/getList', [UserController::class, 'getList']);
Route::post('/user/login', [UserController::class, 'login']);
Route::post('/user/cadUser', [UserController::class, 'cadUser']);
Route::post('/user/upUser/{id}', [UserController::class, 'upUser']);
Route::put('/user/delUser/{id}', [UserController::class, 'delUser']);
Route::put('/user/blkUser/{id}', [UserController::class, 'blkUser']);
