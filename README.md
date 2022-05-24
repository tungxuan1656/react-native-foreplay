# Simple foreplay app

## Init project
* Create project with tree folder
```
.
├── App.js
├── assets
│   ├── AppColors.js
│   ├── AppFont.js
│   ├── AppIcons.js
│   ├── AppImages.js
│   ├── Assets.js
│   ├── fonts
│   ├── icons
│   ├── images
│   └── locales
├── components
│   ├── Dialog
│   │   ├── GActionSheet.js
│   │   ├── GAlert.js
│   │   ├── GDialog.js
│   │   ├── GInputAlert.js
│   │   ├── GSpinner.js
│   │   └── GToast.js
│   ├── ImageView
│   │   └── ImageViewPlaceHolder.js
│   └── Separator.js
├── configs
│   ├── Config.js
│   └── ConfigSlice.js
├── constants
│   ├── Const.js
│   ├── Global.js
│   └── Styles.js
├── controllers
│   ├── api
│   ├── notification
│   ├── redux
│   │   ├── AppSlice.js
│   │   ├── AppStore.js
│   │   └── GlobalSlice.js
│   ├── socket
│   └── translate
├── helpers
│   ├── ImagePicker
│   ├── navigation
│   │   └── NavHelper.js
│   └── permissions
├── modules
│   └── Examples
│       └── Example.js
├── routes
│   ├── AppLaunching.js
│   ├── AppNavigator.js
│   └── AppTabBar.js
└── utils
    └── Utils.js
```
* Copy format file `.prettierrc.js`
* Change location `App.js`
* Copy `scripts` in `package.json`

# Setup Project
## Momemt, lodash,...
```
yarn add lodash
yarn add @react-native-async-storage/async-storage
yarn add react-native-status-bar-height
yarn add moment
```

## Navigation
```
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack
```

## Bottom-tabs
```
yarn add @react-navigation/bottom-tabs
```

## Custom fonts
1. Create react-native.config.js
```
module.exports = {
    project:{
        ios: {},
        android: {},
    },
    assets: ['./app/assets/fonts'],
}
```
2. Copy font files to folder and Run
```
react-native link
```

## Redux, Redux thunk
```
yarn add redux react-redux @reduxjs/toolkit redux-thunk redux-persist redux-persist-transform-filter
```
* Config AppStore

## Modal, Toast, Spinner,...
```
yarn add react-native-toast-message
yarn add react-native-modals
yarn add react-native-loading-spinner-overlay
```
