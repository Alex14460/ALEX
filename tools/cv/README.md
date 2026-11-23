# CV served by the site

**Single source of truth: `D:\CV\_source\cvmaster.py`** (see `D:\CV\VARIANT_KIT.md`).
The site does not generate CVs any more — it **serves the master outputs**:

| Served at | File in `public/` | Master output |
|---|---|---|
| `/cv` | `Alexandre_Roussel_CV_EN.pdf` | `D:\CV\Alexandre_Roussel_CV_EN.pdf` (ATS base, no photo) |
| `/cv-fr` | `Alexandre_Roussel_CV_FR.pdf` | `D:\CV\Alexandre_Roussel_CV_FR.pdf` |

## After regenerating a CV

```bash
cd "D:\CV\_source" && py -3 cvmaster.py            # and/or --fr / --variant <name>
bash /d/Dev/astro-sphere/tools/cv/sync-from-master.sh   # copies + verifies the hashes
cd /d/Dev/astro-sphere && pnpm run build && git add -A && git commit -m "cv: sync master" && git push origin main
```

`sync-from-master.sh` also refreshes the pipeline copies in
`%LOCALAPPDATA%\hermes\attachments\` (used by the job application pipeline) so an
e-mailed CV is byte-identical to the one a recruiter downloads.

## Do not put an HTML/print template back here

`_obsolete/cv_en.html` + `cv_fr.html` were the previous Edge-headless templates. They
drifted from the master (kept the retired AML/CFT section, the "Las Palmas" line, no
phone, Waltio closed in Jul 2026) and produced a CV different from the one sent by
e-mail — the exact failure this folder is meant to prevent. Anyone editing a CV edits
`cvmaster.py`, never a template under `public/`.
