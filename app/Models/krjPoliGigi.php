<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class krjPoliGigi extends Model
{
    use HasFactory;

    public function dokter(){
        return $this->belongsTo(Dokter::class, 'id_dokter', 'id_dokter');
    }

    public function farmasi(){
        return $this->hasOne(Farmasi::class, 'id_pemeriksaan' , 'id_krj_poli_gigi');
    }
}
