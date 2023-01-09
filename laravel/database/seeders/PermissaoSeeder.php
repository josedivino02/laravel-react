<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Permissao;

class PermissaoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permissao::create([
            'desc' => 'ATIVO'
        ]);

        Permissao::create([
            'desc' => 'BLOQUEADO'
        ]);

        Permissao::create([
            'desc' => 'EXCLUIDO'
        ]);

        Permissao::create([
            'desc' => 'PENDENTE'
        ]);
    }
}
