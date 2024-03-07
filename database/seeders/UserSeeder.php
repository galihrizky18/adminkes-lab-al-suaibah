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
                "second_identifyer" => "USR-",
                "id_admin" => "ADM-1",
                "username" => "admin",
                "password" => bcrypt('123'),

            ],
           
        ];

        // format waktu
        $currentTime = time();
        $time = date('YmdHis', $currentTime);

        foreach($dataUser as $i=>$data){
            User::create([
                'id_user'=> $data['id_user'].$i+1,
                'second_identifyer'=> $data['second_identifyer'].$i+1,
                'id_admin'=> $data['id_admin'],
                'username'=> $data['username'],
                'password'=> $data['password'],
        
                ]
            );

        }

    }
}
