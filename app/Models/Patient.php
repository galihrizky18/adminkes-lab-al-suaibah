<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    public function registration(){
        return $this->hasOne(Registration::class, "id_patient" , "id_patient");
    }
}
