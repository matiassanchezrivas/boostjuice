type RootStackParamList = {
  Home: undefined;
  Details: {id: number};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
