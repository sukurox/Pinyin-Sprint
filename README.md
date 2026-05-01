# Pinyin Sprint

A small Monkeytype-inspired typing prototype for practicing Chinese recognition and pinyin typing at the same time.

(Sorry, I’m an absolute novice at coding — and yes, I know absolutely nothing about what I’m doing, lol)

## Run

Open [index.html](C:\Users\Robin Wu\Documents\New project\index.html) in a browser.

## Imported datasets

This project now pulls from:

- [chinese-word-list.txt](C:\Users\Robin Wu\Downloads\chinese-word-list.txt)
- [5000-common-characters.xls](C:\Users\Robin Wu\Downloads\5000-common-characters.xls)
- [cedict_1_0_ts_utf-8_mdbg.zip](C:\Users\Robin Wu\Downloads\cedict_1_0_ts_utf-8_mdbg.zip)

The generated browser-ready dataset lives in [generated-data.js](C:\Users\Robin Wu\Documents\New project\generated-data.js).

To rebuild it after replacing the source files, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\build-data.ps1
```

## What is included

- strict pinyin typing with immediate error feedback
- `words` and `time` modes
- mixed, core, common-word, and common-character decks
- live accuracy, WPM, Hanzi-per-minute, and streak tracking
- lightweight local best-score storage with `localStorage`
- imported common words with pinyin and English glosses sourced from CC-CEDICT when available

## Controls

- click anywhere or start typing to focus the input
- `Esc` restarts the run
- `Tab` toggles the pinyin guide
