---
name: verify-notes
description: Launch Notes, drive its browser UI and `notes` CLI the way a user does, and capture proof. Use before claiming a Notes change works, or to reproduce a Notes bug report.
---

# Verify Notes

Drive the real Notes app through `control-notes`, the CLI that ships in this skill. Read `features/README.md` first, then the feature file that matches the change.

## Launch

- Run `scripts/control-notes launch`. It sets `NOTES_DATA_DIR=/tmp/notes-verify-$RUN_ID`, applies migrations, seeds `Quarterly plan` and `Grocery list`, and starts Notes at `http://127.0.0.1:4173`.
- Ready means usable: the `All notes` heading is visible and both seeded notes are listed. A port that answers is not enough.
- Put `scripts/` on `PATH` so `control-notes` and the `notes` CLI resolve.
- Teardown is `control-notes stop`. See Cleanup.

## Doctor

- Run `control-notes doctor` before driving, and again whenever something looks off.
- It is read-only. It checks that the process is up, the port is owned by this run, the build revision matches the checkout, and the data directory is the disposable one.
- If doctor fails, fix the instance or report it. Do not drive it.

## Drive

- Browser actions: `control-notes browser <click|fill|press|snapshot|screenshot>` with `--role` and `--name`.
- Terminal actions: `control-notes cli -- notes <command>`.
- Use ARIA roles, accessible names and prompt strings. Never coordinates or tab order.
- The exact steps for each feature live in `features/<feature>.md`.

## Evidence

- Save artifacts under `artifacts/<feature-id>/`, named after the entry point used.
- Exercise the real user path. No internal setters or test-only endpoints.
- Capture the action and the resulting state, not only the final screen.
- Check side effects too: reopen a saved note from a second view, read the CLI exit code.

## Cleanup

- Run `control-notes stop`. It stops only the instance this run launched, never by process name.
- Remove `NOTES_DATA_DIR`. Keep `artifacts/`: the proof must survive the teardown.

## Helpers

- `scripts/control-notes` is executable. Run `control-notes --help` to list every subcommand.
