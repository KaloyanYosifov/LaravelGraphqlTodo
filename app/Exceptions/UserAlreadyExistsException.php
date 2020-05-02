<?php

namespace App\Exceptions;

use Nuwave\Lighthouse\Exceptions\RendersErrorsExtensions;

class UserAlreadyExistsException extends \Exception implements RendersErrorsExtensions
{
    public function __construct()
    {
        parent::__construct('User already exists!');
    }

    public function isClientSafe()
    {
        return true;
    }

    public function getCategory()
    {
        return 'authentication';
    }

    public function extensionsContent(): array
    {
        return [];
    }
}
