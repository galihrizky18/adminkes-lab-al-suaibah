<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    use HasFactory;

    public function patient(){
        return $this->belongsTo(Patient::class, "id_patient", 'id_patient');
    }
}
