# Portfolio Mod

Mod do DBM, który automatyzuje proces tworzenia profesjonalnych grafik portfolio. Idealny dla serwerów graficznych, artystów i społeczności kreatywnych. 
![{2423F01C-54DA-4BD2-943C-8223FEAA76FC}](https://github.com/user-attachments/assets/d3f72faa-4cec-486a-a241-896ccca8dc56)

# ⚙️ Instalacja i Konfiguracja

##  Krok 1: Wymagania Systemowe

Przed instalacją moda, upewnij się, że masz zainstalowane niezbędne pakiety. Otwórz konsolę (CMD, PowerShell, Terminal) w głównym folderze swojego bota i wpisz poniższe komendy:
![{9E11A53C-160B-4010-B0EA-73E9F3FBB211}](https://github.com/user-attachments/assets/b85f3112-f43f-49b0-a319-4583057ef52a)

```bash
npm i canvas
npm i sharp
```
## Krok 2: Instalacja Moda
Pobierz plik .js tego moda.
Umieść go w folderze /actions swojego projektu Discord Bot Maker.
Uruchom ponownie DBM. Mod powinien pojawić się na liście akcji w sekcji "Canvas".

##  Krok 3: Tworzenie Komendy Slash
W edytorze komend DBM stwórz nową komendę slash (np. /portfolio). Musi ona zawierać następujące parametry:
Wykonawca - Typ: User (Wymagany)
dla kogo - Typ: User (Wymagany)
zalacznik - Typ: Attachment (Wymagany) - Nazwa musi brzmieć DOKŁADNIE zalacznik!
watermark - Typ: String (Opcjonalny)

![{662A3C82-2776-49BC-8116-1CA7D752E644}](https://github.com/user-attachments/assets/927032d3-426c-4ed6-ac06-89b483193e89)

## Krok 4: Konfiguracja Akcji
Dodaj akcję "Portfolio Mod" do swojej nowej komendy. W ustawieniach akcji znajdziesz trzy zakładki:
![{4181A048-36E4-43A0-B6A3-FF80192F390B}](https://github.com/user-attachments/assets/16fd966e-5a5b-47f2-a640-b73be7fc5a98)
### Settings 1:
ID Roli z Uprawnieniami: Wklej ID roli, która może używać komendy. Zostaw puste, aby zezwolić wszystkim.
ID Kanału do Wysyłki: Wklej ID kanału, na który mają być wysyłane grafiki. Zostaw puste, aby bot odpowiadał na kanale, gdzie użyto komendy.
Możesz tu również dostosować wygląd embedu (tytuł, opis, kolor).
### Settings 2:
Skonfiguruj główny tekst na obrazie (treść, czcionka, rozmiar, kolor).
Wyrównanie Tekstu w Pionie: Wybierz, czy tekst ma się pojawić nad główną grafiką (Góra), czy pod nią (Dół).
### Obraz:
Dostosuj wygląd głównej grafiki (skala, zaokrąglenie, cień).
Przezroczystość Znaku Wodnego: Ustaw widoczność znaku wodnego w procentach (np. 35%).
Zmień domyślne tło lub ramkę, wklejając linki URL.
![{EA0BF29D-4F8D-4E72-89D7-97407D5E907E}](https://github.com/user-attachments/assets/8eb21312-f521-4483-9b5b-1aaadea31645)

#  🚀 Użycie Komendy
Po skonfigurowaniu, użyj komendy na swoim serwerze Discord:
/portfolio wykonawca: @uzytkownik1 dla_kogo: @uzytkownik2 zalacznik: [TWOJA_GRAFIKA.PNG] watermark: [TWOJ_WATERMARK.PNG]
![{A98551A9-02C0-4BBA-BC49-7E312FF02A75}](https://github.com/user-attachments/assets/179e317a-22d9-49ba-8036-f7817de68cf5)
Bot przetworzy dane i wyśle profesjonalnie wyglądającą grafikę portfolio!
# ❤️ Autor
Mod został stworzony i jest rozwijany przez euforia.44.

# [PORTFOLIO MOD]
author: euforia.44
wersja: 7.2.0

Zmiany:

- Naprawiono błąd sieciowy `ConnectTimeoutError` poprzez wydłużenie czasu oczekiwania na pobranie obrazka do 30 sekund.
- Zaimplementowano ulepszone, bardziej szczegółowe logowanie błędów sieciowych w konsoli, co ułatwia diagnozowanie problemów.
- Dodano bardziej informacyjne komunikaty o błędach dla użytkownika w przypadku problemów z pobieraniem obrazów.
- Kod został uproszczony i zoptymalizowany dla większej stabilności.
