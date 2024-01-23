<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $dataUser = [
            [
                "id_user" => "USR-",
                "name" => "admin",
                "username" => "admin",
                "password" => bcrypt('123'),
                "email" => "admin@gmail.com",
            ]
        ];

        // format waktu
        $currentTime = time();
        $time = date('YmdHis', $currentTime);

        foreach($dataUser as $i=>$data){
            User::create([
                'id_user'=> $data['id_user'].$time,
                'name'=> $data['name'],
                'username'=> $data['username'],
                'password'=> $data['password'],
                'email'=> $data['email'],
                ]
            );

        }

    }
}
