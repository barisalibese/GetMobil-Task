
# Get Mobil Case
Proje Kurulumu İçin Lütfen Bilgisayarınızda Docker'ın Kurulu Olduğundan emin olunuz
Proje Dosyalarını src/ klasörü altında bulabilirsiniz.

## Kurulum Aşamaları
### Lütfen Aşağıdaki Komutları Çalıştırın
```bash
 docker compose build
 docker compose up
 docker exec php php artisan migrate
 docker exec php php artisan passport:install
 docker exec php php artisan passport:client --pasword
```
Üstteki Komutları Çalıştırdıktan Sonra
client password clientid ile clientsecret bilgilerini frontend env variables içinde lütfen değiştirin


Not: frontend tarafı eksik kalmıştır bilgilerinize.
