import { Images } from '../components/Images';
import { grayscaleTheme } from '../themes/grayscale';
import { AppConfig, PortfolioPageItem, PortfolioSection } from './AppData.interface';
import * as yup from 'yup';

// json-like object for app configuration

const appConfigSchema = yup.object().shape({
  title: yup.string().required(),
  avatarImage: yup.string().required(),
  theme: yup.string().required(),
  social: yup
    .object({
      instagram: yup.string().url(),
      github: yup.string().url(),
      linkedin: yup.string().url(),
      facebook: yup.string().url(),
      stackoverflow: yup.string().url()
    })
    .required(),
  sections: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required(),
        title: yup.string(),
        description: yup.string(),
        backgroundImage: yup.string(),
        portfolioPageItems: yup
          .array()
          .of(
            yup.object().shape({
              title: yup.string(),
              contents: yup
                .mixed()
                .test(
                  'is-string-or-array',
                  'contents must be a string or array of strings',
                  (value) =>
                    typeof value === 'string' || (Array.isArray(value) && value.every((v) => typeof v === 'string'))
                )
                .required(),
              image: yup.string(),
              imagePosition: yup.string()
            })
          )
          .required()
      })
    )
    .required()
});

const resolveImports = (config: AppConfig): AppConfig => {
  if (config.avatarImage) {
    config.avatarImage = Images[config.avatarImage];
  }
  config.theme = grayscaleTheme;
  config.sections.forEach((section: PortfolioSection) => {
    if (section.backgroundImage) {
      section.backgroundImage = Images[section.backgroundImage];
    }
    section.portfolioPageItems?.forEach((item: PortfolioPageItem) => {
      if (item.image) {
        item.image = Images[item.image];
      }
    });
  });
  return config;
};

export const parseAppConfig = async (input: string | object): Promise<AppConfig> => {
  let jsonData: AppConfig;
  if (typeof input === 'string') {
    const response = await fetch(input);
    jsonData = await response.json();
  } else {
    jsonData = input as AppConfig;
  }
  appConfigSchema.validateSync(jsonData);
  return resolveImports(jsonData);
};
