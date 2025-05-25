import mathDark2 from '../assets/ai-generated/math-dark-2.jpg';
import mathDark1 from '../assets/ai-generated/math-dark-1.jpg';
import music from '../assets/ai-generated/music.jpg';
import math from '../assets/ai-generated/math.jpg';
import networks from '../assets/ai-generated/networks.jpg';
import signals from '../assets/ai-generated/signals.jpg';
import signalsDark from '../assets/ai-generated/signals-dark.jpg';
import universe from '../assets/ai-generated/universe.jpg';
import beachDark from '../assets/ai-generated/beach-dark.jpg';
import education from '../assets/ai-generated/education.jpg';

import concordia from '../assets/logos/concordia.png';
import uhavana from '../assets/logos/universidad_de_la_habana.png';
import amyuni from '../assets/logos/amyuni.png';
import gmixon from '../assets/logos/gmixon.png';
import HPE from '../assets/logos/Hewlett_Packard_Enterprise.png';
import ICRT from '../assets/logos/icrt.png';
import coffee from '../assets/coffee.jpg';

import aos from '../assets/portfolio/aruba-os.png';
import newdj from '../assets/portfolio/newdj.png';
import radiosys from '../assets/portfolio/radiosys.bmp';
import amyuniPdf from '../assets/portfolio/amyuni-pdf-converter.png';
import amyuniPdf2 from '../assets/portfolio/amyuni-pdf-converter-2.png';
import amyuniPdfCreator from '../assets/portfolio/amyuni-pdf-creator.jpg';
import arubaCnx from '../assets/portfolio/aruba-cnx.png';
import portfolioTemplate from '../assets/portfolio/portfolio-template.png';

import avatar from '../assets/avatar-yms.jpg';

// Helper function to ensure URLs have the correct public path prefix
const withPublicUrl = (url: string) => `${process.env.PUBLIC_URL}${url}`;

const _Images = {
  MathDark2: withPublicUrl(mathDark2),
  MathDark1: withPublicUrl(mathDark1),
  Music: withPublicUrl(music),
  Education: withPublicUrl(education),
  BeachDark: withPublicUrl(beachDark),
  Math: withPublicUrl(math),
  Networks: withPublicUrl(networks),
  Signals: withPublicUrl(signals),
  SignalsDark: withPublicUrl(signalsDark),
  Universe: withPublicUrl(universe),
  Concordia: withPublicUrl(concordia),
  UH: withPublicUrl(uhavana),
  Amyuni: withPublicUrl(amyuni),
  Gmixon: withPublicUrl(gmixon),
  HPE: withPublicUrl(HPE),
  ICRT: withPublicUrl(ICRT),
  Coffee: withPublicUrl(coffee),
  RadioSys: withPublicUrl(radiosys),
  AOS: withPublicUrl(aos),
  NewDJ: withPublicUrl(newdj),
  AmyuniPdfConverter: withPublicUrl(amyuniPdf),
  AmyuniPdfConverter2: withPublicUrl(amyuniPdf2),
  AmyuniPdfCreator: withPublicUrl(amyuniPdfCreator),
  ArubaCNX: withPublicUrl(arubaCnx),
  PortfolioTemplate: withPublicUrl(portfolioTemplate),
  Avatar: withPublicUrl(avatar)
};

export const Images: { [key: string]: string } & typeof _Images = _Images;
