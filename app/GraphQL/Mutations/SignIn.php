<?php

namespace App\GraphQL\Mutations;

use App\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use GraphQL\Type\Definition\ResolveInfo;
use App\Exceptions\InvalidCredentialsException;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class SignIn
{
    /**
     * Return a value for the field.
     *
     * @param null $rootValue  Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param mixed[] $args  The arguments that were passed into the field.
     * @param GraphQLContext $context  Arbitrary data that is shared between all fields of a single query.
     * @param ResolveInfo $resolveInfo  Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     * @return mixed
     * @throws InvalidCredentialsException
     */
    public function __invoke($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        ['email' => $email, 'password' => $password] = $args['input'];
        $user = User::whereEmail($email)->firstOrFail();

        if (!Hash::check($password, $user->password)) {
            throw new InvalidCredentialsException();
        }

        $user->api_token = Str::random(50);
        $user->save();

        return $user;
    }
}
