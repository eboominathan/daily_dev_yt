<?php

use App\Http\Controllers\API\Authcontroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::middleware('auth:sanctum')->group(function () {
    Route::post("/auth/logout", [Authcontroller::class]);
});

Route::post("/auth/register", [AuthController::class, 'register']);
Route::post("/auth/login", [AuthController::class, 'login']);
Route::post("/auth/checkCredentials", [AuthController::class, 'checkCredentials']);
