interface INavigationLink {
  id: number;
  title: string;
  url: string;
}

interface ILayout {
  navigationLinks?: INavigationLink[];
  currentLocale: string;
  allLocales?: LocaleItem[];
}
