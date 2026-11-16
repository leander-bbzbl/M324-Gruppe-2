# Larpometer

Eine Web-Applikation, welche 4 vordefinierte Themen, die viel gelarped werden beinhaltet. Man kann eines dieser 4 Themen wählen und herausfinden ob man selbst ein Larper ist, indem man kurz 10 Fragen beantwortet.
Es gibt mehr Larper als je zuvor in der Geschichte der Menschheit. Wir haben uns dazu entschieden aktiv gegen Larper zu kämpfen, indem wir die Web-Applikation Larpometer erstellen

# BBZBL Modul 324: Web-Applikation Template

Dieses Template dient als Vorlage zum Starten eures Projekts.

Ziel ist es ein Repository zu erstellen, welches, [wie das Muster](https://github.com/herrhodel/modul-324-muster) eine
Web-Applikation enthält, welche automatisch getestet, gebaut, released und deployed wird.

> [!NOTE]
> Die Web-Applikation muss in einem Ordner `/app` erstellt werden. Ansonsten müssen Folgescripts angepasst werden.

Je nach Thema, können vom Muster die Grundlagen kopiert und abgeändert werden.
Natürlich soll dieses Repo nicht nur ein Nginx sondern eine eigene Applikation beinhalten.

**Wieso nicht direkt das Muster als Grundlage?**

Dies war tatsächlich mal so. Die Erfahrung hat gezeigt, dass die Komplexität
das Verständnis erschwert. Die Idee ist, dass die einzelnen Schritte bewusster
umgesetzt werden und man nicht am Anfang vor lauter Bäume den Wald nicht mehr sieht.

In der ersten Woche wird bewusst das Muster bei allen zum Laufen gebracht. Dies
soll ermöglichen, dass ein Gesamtüberblick von Anfang an existiert.

> [!NOTE]
> Vorgegebene Ordnerstruktur
> Die Ordnerstruktur soll analog zum Muster aufgesetzt werden.
>
> Der Ordner `docs` wird von Anfang an benötigt und ist direkt im starter
> vorgegeben.

## Lokale Entwicklung

Voraussetzungen: Python 3.13 und Node.js 24+ (auch in `mise.toml` hinterlegt).

```bash
git clone https://github.com/leander-bbzbl/M324-Gruppe-2.git
cd M324-Gruppe-2
```

### Backend

```bash
cd app/backend
python3.13 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements-dev.txt
python init_db.py
python -m uvicorn main:app --reload
```

Unter http://127.0.0.1:8000 erscheint `{"message":"Hello World"}`.
Die API-Dokumentation ist unter http://127.0.0.1:8000/docs erreichbar.
`init_db.py` erstellt eine leere SQLite-Datenbank ohne Tabellen. Die Datei
`app/backend/larpometer.sqlite3` wird nicht in Git gespeichert.

### Frontend

In einem zweiten Terminal, ausgehend vom Projektordner:

```bash
cd app/frontend
npm ci
npm run dev
```

Unter http://localhost:5173 erscheint die Startseite mit `Larpometer` und
`Hello World`. Zum Beenden der Server jeweils `Ctrl+C` verwenden.

### IDE und Linter

In VS Code oder Cursor den Projektordner öffnen und die empfohlenen Erweiterungen
aus `.vscode/extensions.json` installieren: **Python** und **Ruff**.
Die Projekteinstellungen hinterlegen `app/backend/.venv` als Standard-Python-Umgebung
und aktivieren die Python-Formatierung mit Ruff beim Speichern. Falls bereits ein
anderer Interpreter gewählt ist, über `Python: Select Interpreter` zu
`app/backend/.venv` wechseln.

Diese Prüfungen aus dem Projektordner ausführen:

```bash
app/backend/.venv/bin/python -m ruff check app/backend
app/backend/.venv/bin/python -m ruff format --check app/backend
npm --prefix app/frontend run lint
npm --prefix app/frontend run build
```
