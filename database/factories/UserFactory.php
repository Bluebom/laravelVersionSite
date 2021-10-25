<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user' => $this->faker->firstName(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.', // password
            'img' => $this->faker->image($dir = '/tmp', $width = 640, $height = 480),
            'name' => $this->faker->name(),
            'remember_token' => Str::random(10),
        ];
    }
}
