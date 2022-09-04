<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlans;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlans = [
            [
                "name" => "Basic",
                "price" => 100000,
                "active_in_month" => 3,
                "features" => json_encode(["feature 1", "feature 2", "feature 3"])
            ],
            [
                "name" => "Super Premium",
                "price" => 300000,
                "active_in_month" => 6,
                "features" => json_encode(["feature 1", "feature 2", "feature 3"])
            ]
        ];

        SubscriptionPlans::insert($subscriptionPlans);
    }
}
