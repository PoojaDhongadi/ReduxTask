import { Dimensions, PixelRatio } from 'react-native';

const DESIGN_WIDTH = 430;
const DESIGN_HEIGHT = 932;

const { width, height } = Dimensions.get('window');

const widthScale = width / DESIGN_WIDTH;
const heightScale = height / DESIGN_HEIGHT;

export function responsiveWidth(value = 0) {
  return normalize(value);
}

export function responsiveHeight(value = 0) {
  return normalize(value, 'height');
}

export function responsiveFont(value = 0) {
  return normalize(value);
}

function normalize(size, based = 'width') {
  const newSize = based === 'height' ? size * heightScale : size * widthScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

