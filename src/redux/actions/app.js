import { TOGGLE_MOBILE_VIEW } from './types';

export const toggleMobileView = (screen) => ({
  type: TOGGLE_MOBILE_VIEW,
  payload: screen,
});
