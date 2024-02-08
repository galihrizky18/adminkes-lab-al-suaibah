<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admins extends Model
{
     use HasFactory;

    protected $table = 'admins';

    public function user()
    {
        return $this->hasOne(User::class, 'id_admin', 'id_admin');
    }
}
