<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dokter extends Model
{
    use HasFactory;

    protected $primary_key = 'id_dokter';

    public function layanan(){
        return $this->belongsTo(Layanan::class, "id_layanan", "id_layanan");
    }
    public function jadwalDokter(){
        return $this->belongsTo(JadwalDokter::class, "id_dokter", "id_dokter");
    }
    public function registration(){
        return $this->hasOne(Registration::class, 'id_dokter', 'id_dokter');
    }

    public function krjPoliUmumLansia(){
        return $this->hasOne(krjPoliUmumLansia::class, 'id_dokter', 'id_dokter');
    }
    
    public function krjPoliGigi(){
        return $this->hasOne(krjPoliGigi::class, 'id_dokter', 'id_dokter');
    }
}
