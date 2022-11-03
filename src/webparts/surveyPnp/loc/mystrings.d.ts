declare interface ISurveyPnpWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'SurveyPnpWebPartStrings' {
  const strings: ISurveyPnpWebPartStrings;
  export = strings;
}
