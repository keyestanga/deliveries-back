<?php

use App\Http\Controllers\TodoController;
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

// Route::get('',[TodoController::class,]);

// Route::post('',[,'store']);

/* ('/update_todo/{id}',[,'update']); */

Route::get('/get_todo', [TodoController::class, 'index']);
Route::post('/add_todo', [TodoController::class, 'store']);
Route::delete('/delete_todo/{id}', [TodoController::class, 'destroy']);
// Route::resource('Todo',[TodoController::class];



