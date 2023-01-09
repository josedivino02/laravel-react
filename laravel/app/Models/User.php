<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'permissao_id'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function cadUser($name, $email, $senhaHash)
    {
        $date = $this->dateNow();

        return DB::insert("INSERT INTO users (name, email, password, permissao_id, updated_at, created_at)
        VALUES ('{$name}', '{$email}', '{$senhaHash}', 1, '{$date}', '{$date}')");
    }

    public function delUser($id)
    {
        $date = $this->dateNow();

        return DB::update("UPDATE users
        SET permissao_id = 3, updated_at = '{$date}'
        WHERE id = {$id}");
    }

    public function upUser($id, $name, $email, $senhaHash)
    {
        $date = $this->dateNow();

        return DB::update("UPDATE users
        SET name = '{$name}', email = '{$email}', password = '{$senhaHash}', updated_at = '{$date}'
        WHERE id = {$id}");
    }

    public function blkUser($id)
    {
        $date = $this->dateNow();

        return DB::update("UPDATE users
        SET permissao_id = 2, updated_at = '{$date}'
        WHERE id = {$id}");
    }

    public function getList()
    {
        return DB::select("SELECT u.id, name, email, email_verified_at, password, remember_token, p.desc FROM users u LEFT JOIN permissaos p ON u.permissao_id = p.id WHERE u.permissao_id NOT IN (3)");
    }

    public function userSituation($sit)
    {
        if ($sit) {
            return DB::select('SELECT count(id) as id FROM users WHERE permissao_id = ?', [$sit]);
        } else {
            return DB::select('SELECT count(id) as id FROM users');
        }
    }

    private function dateNow()
    {
        return date('Y-m-d H:i:s');
    }

}
