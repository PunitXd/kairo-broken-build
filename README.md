# kairo-broken-build

Test repo for Kairo's P1 exit criterion "a broken build ends at FAILED in BUILDING with its log lines stored".

Detection succeeds (`package.json` with a `start` script), so the run gets to BUILDING. There the generated Dockerfile runs `npm install`, which fails with a 404: `kairo-package-that-does-not-exist-9f3c1` isn't on npm. There's no lockfile on purpose, so the failure is the missing package, not a lockfile mismatch.
