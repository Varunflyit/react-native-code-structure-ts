import {AppRoutes, AppStrings} from '../../themes/appConstans';
import {AppImages} from '../../themes/appImages';

export const tabArray = [
  {
    id: 1,
    icon: AppImages.home,
    selectedIcon: AppImages.homeActive,
    name: AppRoutes.home,
  },
  {
    id: 2,
    icon: AppImages.walletIcon,
    selectedIcon: AppImages.walletActive,
    name: AppRoutes.wallet,
  },
  {
    id: 3,
    icon: AppImages.calendar,
    selectedIcon: AppImages.calendarActive,
    name: AppStrings.booking,
  },
  {
    id: 4,
    icon: AppImages.bell,
    selectedIcon: AppImages.bellActive,
    name: AppRoutes.notification,
  },
  {
    id: 5,
    icon: AppImages.user,
    selectedIcon: AppImages.userActive,
    name: AppRoutes.profile,
  },
];
