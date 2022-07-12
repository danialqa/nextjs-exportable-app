# Next.js PWA Delivery App! 🚀

### 01 - Build and get ready for export

For export the project, we have to run the following command, and it will create the build in the “/out” folder:

```bash
npx next build && npx next export
```

### 02 - Install CocoaPods

We need to add the SO where our application is going to work. In this case, Android and iOS. We also need to install CocoaPods to be able to use `Capacitor` on iOS.

```bash
sudo gem install cocoapods
```

> **NOTE:** If you get any error while installing CocoaPods, it will probably be because you don’t have brew installed on your computer.

### 03 - Create Android and iOS folders

These commands will create an iOS and Android folder containing the built code of your web app:

```bash
npx cap add android
npx cap add ios
```

### 04 - Run the application locally

In order to run it, we also need XCode in the case of iOS, or Android Studio in the case of Android. We just need to run the following command depending on whether you want to launch it on Android or iOS.

```bash
npx cap open android
npx cap open ios
```
