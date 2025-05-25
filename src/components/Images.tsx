import mathDark2 from '../assets/ai-generated/math-dark-2.jpg';
import mathDark1 from '../assets/ai-generated/math-dark-1.jpg';
import music from '../assets/ai-generated/music.jpg';
import math from '../assets/ai-generated/math.jpg';
import networks from '../assets/ai-generated/networks.jpg';
import signals from '../assets/ai-generated/signals.jpg';
import signalsDark from '../assets/ai-generated/signals-dark.jpg';
import universe from '../assets/ai-generated/universe.jpg';
import education from '../assets/ai-generated/education.jpg';

import avatar from '../assets/woman-face-cartoon.jpg';

// Helper function to ensure URLs have the correct public path prefix
const withPublicUrl = (url: string) => `${process.env.PUBLIC_URL}${url}`;

const _Images = {
  MathDark2: withPublicUrl(mathDark2),
  MathDark1: withPublicUrl(mathDark1),
  Music: withPublicUrl(music),
  Education: withPublicUrl(education),
  Math: withPublicUrl(math),
  Networks: withPublicUrl(networks),
  Signals: withPublicUrl(signals),
  SignalsDark: withPublicUrl(signalsDark),
  Universe: withPublicUrl(universe),
  Avatar: withPublicUrl(avatar)
};

export const Images: { [key: string]: string } & typeof _Images = _Images;
