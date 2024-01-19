<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dokter extends Model
{
    use HasFactory;
    public function layanan(){
        return $this->belongsTo(Layanan::class, "id_layanan", "id_layanan");
    }
    public function registration(){
        return $this->hasOne(Registration::class, 'id_dokter', 'id_dokter');
    }
}
