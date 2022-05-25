import Assets from '../assets/Assets';
import {Font, FontSize} from '../assets/AppFont';

export default {
  Text: {
    largeTitle: {
      color: Assets.Colors.largeTitle,
      fontFamily: Font.bold,
      fontSize: FontSize.xxx_large,
      // lineHeight: 30
    },
    heading1: {
      color: Assets.Colors.title,
      fontFamily: Font.bold,
      fontSize: FontSize.xx_large,
      // lineHeight: 30
    },
    heading2: {
      color: Assets.Colors.title,
      fontFamily: Font.bold,
      fontSize: FontSize.x_large,
      // lineHeight: 20
    },
    title: {
      color: Assets.Colors.title,
      fontFamily: Font.bold,
      fontSize: FontSize.large,
      lineHeight: 18,
    },
    subTitle: {
      color: Assets.Colors.title,
      fontSize: FontSize.medium,
      fontFamily: Font.medium,
      lineHeight: 20
    },
    body: {
      color: Assets.Colors.body,
      fontFamily: Font.medium,
      fontSize: FontSize.medium,
      lineHeight: 20
    },
    bodyDialog: {
      color: Assets.Colors.body,
      fontFamily: Font.medium,
      fontSize: FontSize.large,
      lineHeight: 22,
    },
    smallBody: {
      color: Assets.Colors.body,
      fontFamily: Font.medium,
      fontSize: FontSize.small,
      // lineHeight: 15
    },
    readMore: {
      color: Assets.Colors.body,
      fontFamily: Font.bold,
    },
  },
  TextInput: {
    color: Assets.Colors.white,
    fontFamily: Font.semiBold,
    fontSize: FontSize.medium,
    // lineHeight: 20
  },
  Icon: {
    ListItemIcon: {
      borderRadius: 8,
      width: 30,
      height: 30,
      resizeMode: 'center',
    },
    ListButtonIcon: {
      width: 30,
      height: 30,
      resizeMode: 'center',
    },
    Icon: {
      width: 26,
      height: 26,
      resizeMode: 'center',
    },
    FlagHeaderHome: {
      // padding: 5,
      borderRadius: 22,
      height: 22,
      width: 22,
      resizeMode: 'contain',
    },
    IconHeaderHome: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
    },
  },
  screenHeader: ({
    title,
    backgroundColor = Assets.Colors.bgBlue,
    headerRight,
    header,
    ...props
  }) => {
    return {
      headerShown: false,
      // ...TransitionPresets.SlideFromRightIOS,
      ...props,
    }
  },
  layout: {
    row: {
      flexDirection: 'row',
    },
    column: {
      flexDirection: 'column',
    },
    rowCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowCenterVertical: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    columnCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    columnCenterHorizontal: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}
