<?php

namespace Database\Seeders;

use App\Models\Admins;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dataUser = [
            [
                "id_admin" => "ADM-1",
                "id_staff" => "41231231313",
                "name" => "admin",
                "phone" => '084512476127831',
                "email" => "admin@gmail.com",
                "gender" => "male",
                "birth" => "2018-04-28",
                "religion" => "Islam",
                "province" => "Sumatera Selatan",
                "city" => "Kota Palembang",
                "nationality" => "Indonesia",
                "address" => "Sulaiman Amin No 10 Rt24 Rw 07",
            ],
            
           
        ];

        // format waktu
        $currentTime = time();
        $time = date('YmdHis', $currentTime);

        foreach($dataUser as $i=>$data){
            Admins::create([
                'id_admin'=> $data['id_admin'],
                'id_staff'=> $data['id_staff'],
                'name'=> $data['name'],
                'phone'=> $data['phone'],
                'email'=> $data['email'],
                'gender'=> $data['gender'],
                'birth'=> $data['birth'],
                'religion'=> $data['religion'],
                'province'=> $data['province'],
                'city'=> $data['city'],
                'nationality'=> $data['nationality'],
                'address'=> $data['address'],
                ]
            );

        }
    }
}
