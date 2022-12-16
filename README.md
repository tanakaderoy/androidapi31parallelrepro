# androidapi31parallelrepro
Repo to show the Android API 31 parallelization issue in Detox

run

```
yarn install
yarn start (separate terminal)
yarn e2e-build android.debug
yarn e2e-run android.debug --max-workers 3
```
1 emulator will launch and run tests but the rest will time out
