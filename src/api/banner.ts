import phonesBanner from '../images/banner-phones.png';
import tabletsBanner from '../images/banner-tablets.png';
import accessoriesBanner from '../images/banner-accessories.png';

export const getBanner = () => {
  return Promise.resolve([accessoriesBanner, phonesBanner, tabletsBanner]);
};
