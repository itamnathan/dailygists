<?php

namespace App\Gamify\Points;

use QCod\Gamify\PointType;

class RefferedUser extends PointType
{
    /**
     * Number of points
     *
     * @var int
     */
    public $points = 200;

    /**
     * Point constructor
     *
     * @param $subject
     */
    public function __construct($subject)
    {
        $this->subject = $subject;
    }
    protected $payee = 'user';
    /**
     * User who will be receive points
     *
     * @return mixed
     */
    // public function payee()
    // {
    //     return $this->getSubject()->user;
    // }
}
