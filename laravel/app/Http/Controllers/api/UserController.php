<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        User::create($request->all());
    }

    public function show($id)
    {
        return User::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
    }

    public function userSituation($sit = null)
    {
        $situation = new \App\Models\User();
        return $situation->userSituation($sit);
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'email'     => 'required',
            'password'  => 'required'
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return DB::select("SELECT id, name, email, remember_token, permissao_id FROM users WHERE email = '{$request->email}'");
        } else {
            return 'Usuário ou Senha incorretos';
        }
    }

    public function cadUser(Request $request)
    {
        $senha = Hash::make($request->password);
        // $senha = password_hash($request->password, PASSWORD_DEFAULT);

        $create = new \App\Models\User();
        return $create->cadUser($request->name, $request->email, $senha);
    }

    public function upUser(Request $request, $id)
    {
        $senha = Hash::make($request->password);

        $update = new \App\Models\User();
        return $update->upUser($id, $request->name, $request->email, $senha, $request->permissao_id);
    }

    public function delUser($id)
    {
        $delete = new \App\Models\User();
        return $delete->delUser($id);
    }

    public function blkUser($id)
    {
        $block = new \App\Models\User();
        return $block->blkUser($id);
    }

    public function getList()
    {
        $list = new \App\Models\User();
        return $list->getList();
    }
}
