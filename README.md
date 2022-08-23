# Next.js + PWA Exportable Application! 🚀

A Next.js boilerplate for creating Progressive Web Apps as well as iOS and Android apps that can be exported.

<img src="https://img.shields.io/github/languages/code-size/danialghahremani/nextjs-pwa-app" alt="" /> <img src="https://img.shields.io/github/checks-status/danialghahremani/nextjs-pwa-app/master" alt="" /> 

## Demo
https://nextjs-pwa-app-danialghahremani.vercel.app/

### 01 - Build and prepare for export

To export the project, use the following command, which will place the build in the "/out" folder:

```bash
npx next build && npx next export
```

### 02 - Install CocoaPods

We must include the SO where our application will run. In this scenario, Android and iOS are involved. To utilise 'Capacitor' on iOS, we must additionally install CocoaPods.

```bash
sudo gem install cocoapods
```

> **NOTE:** If you encounter any errors while installing CocoaPods, it is most likely due to a lack of brew on your machine.

### 03 - Make Android and iOS folders

These commands will generate an iOS and Android folder containing your web app's developed code:

```bash
npx cap add android
npx cap add ios
```

### 04 - Run the application locally

We also require XCode in the case of iOS, or Android Studio in the case of Android, to run it. Simply execute the command below, depending on whether you want to launch it on Android or iOS.

```bash
npx cap open android
npx cap open ios
```
