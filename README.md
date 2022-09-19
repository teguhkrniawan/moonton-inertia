

# sebelum pull dari laptop dirumah 
- refresh seed terlebih dahulu


---------------------------------------------------------------------
# untuk menambahkan roles permission menggunakan spatie
- ke folder database -> seeders -> roleTableSeeder.php
- tambahkan role sesuai kebutuhan

# untuk menambahkan user sesuai roles menggunakan spatie
- ke folder database -> seeders -> userTableSeeder.php
- tambahkan user sesuai kebutuhan

# untuk memberikan akses ke middleware yang diinginkan
- cek web.php, untuk atur middleware
- cek Http -> controllers -> Auth -> AuthenticatedSessionController.php

