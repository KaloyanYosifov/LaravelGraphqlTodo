<?php

namespace App\Exceptions;

use Nuwave\Lighthouse\Exceptions\RendersErrorsExtensions;

class InvalidCredentialsException extends \Exception implements RendersErrorsExtensions
{
    public function __construct()
    {
        parent::__construct('Credentials are not valid!');
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
