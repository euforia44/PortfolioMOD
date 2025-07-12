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
Dodaj akcję "Portfolio Mod" do swojej nowej komendy. W ustawieniach akcji znajdziesz cztery zakładki:
<img width="652" height="111" alt="{90869559-86C6-4EC8-9C66-CCC7DCD26512}" src="https://github.com/user-attachments/assets/9c5b65f7-ac58-4c11-9085-5685abe84fc2" />

### Konfiguracja:
ID Roli z Uprawnieniami: Wklej ID roli, która może używać komendy. Zostaw puste, aby zezwolić wszystkim.
ID Kanału do Wysyłki: Wklej ID kanału, na który mają być wysyłane grafiki. Zostaw puste, aby bot odpowiadał na kanale, gdzie użyto komendy.
Możesz tu również dostosować wygląd embedu (tytuł, opis, kolor).
### Styl Tekstu:
Główny tekst jest pobierany z opcji komendy slash o nazwie tekst_grafiki.
Skonfiguruj główny tekst na obrazie ( czcionka, rozmiar, kolor).
Skonfiguruj URL obrazu w drugiej wiadomości!
### Wygląd Grafiki:
Dostosuj wygląd głównej grafiki (skala, zaokrąglenie, cień).
Przezroczystość Znaku Wodnego: Ustaw widoczność znaku wodnego w procentach (np. 35%).
Zmień domyślne tło lub ramkę, wklejając linki URL.
<img width="654" height="462" alt="{B03D03FF-F048-475D-9E40-EC651940EC31}" src="https://github.com/user-attachments/assets/ffcc93ed-dfa3-4594-97f0-9a984cce22a0" />

#  🚀 Użycie Komendy
Po skonfigurowaniu, użyj komendy na swoim serwerze Discord:
/portfolio wykonawca: @uzytkownik1 dla_kogo: @uzytkownik2 zalacznik: [TWOJA_GRAFIKA.PNG] watermark: [TWOJ_TEKST]
<img width="850" height="641" alt="{456FD56F-691F-4AB3-B37F-AD112DA5C9F6}" src="https://github.com/user-attachments/assets/4e198c99-8bdc-4f3e-8aa6-eb33ec1cddb0" />
Bot przetworzy dane i wyśle profesjonalnie wyglądającą grafikę portfolio!
# ❤️ Autor
Mod został stworzony i jest rozwijany przez euforia.44.
