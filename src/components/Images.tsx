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

const _Images = {
  MathDark2: mathDark2,
   MathDark1: mathDark1,
   Music: music,
   Education: education,
   Math: math,
   Networks: networks,
   Signals: signals,
   SignalsDark: signalsDark,
   Universe: universe,
   Avatar: avatar
}

export const Images: { [key: string]: string } & typeof _Images = _Images;
