# Best Fruit Shop

The application creating by [**React Native**](https://reactnative.dev) is reading data from a remote source via MockApi [**REST**](https://mockapi.io/) service. You can look items and try buy it.

## Needed dependencies

You will need Node, Watchman, the React Native command line interface or a JDK and Android Studio.

## Getting started

```bash
git clone https://github.com/DMihail/BestFruitShop.git

yarn install
```

## Step 1: Create an .env file locally

You can duplicate .env.example and name the new copy .env. 

## Step 2: Start Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
cd /ios
pod install

# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
