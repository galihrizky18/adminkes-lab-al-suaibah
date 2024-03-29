<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Layanan extends Model
{
    use HasFactory;

    public function dokters(){
        return $this->hasMany(Dokter::class, "id_layanan", 'id_layanan');
    }

    public function registration(){
        return $this->hasOne(Registration::class, 'id_layanan', 'id_layanan');
    }
}
