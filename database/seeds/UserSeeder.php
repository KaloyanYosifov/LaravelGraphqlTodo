<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = factory(\App\User::class, 30)->create();

        foreach ($users as $user) {
            factory(\App\Todo::class, 15)->create([
                'user_id' => $user->id,
            ]);
        }
    }
}
