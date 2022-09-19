<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@moonton.test',
            'password' => bcrypt('password'),
        ]);
        $admin->assignRole('admin');

        $direktur = User::create([
            'name' => 'Direktur',
            'email' => 'direktur@moonton.test',
            'password' => bcrypt('password')
        ]);
        $direktur->assignRole('direktur');
    }
}
