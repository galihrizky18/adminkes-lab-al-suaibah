<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Dokter;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(LayananSeeder::class);
        $this->call(DokterSeeder::class);
        $this->call(UserSeeder::class);;


        // for($i = 1; $i<=30; $i++){
        //     User::create([
        //         'id_user'=> $i,
        //         'name'=> 'a',
        //         'username'=> 'a',
        //         'password'=> '123',
        //         'email'=> 'a'.$i,
        //         ]
        //     );
        // }

        


    }
}
