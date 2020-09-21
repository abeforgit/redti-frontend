import Route from '@ember/routing/route';

export default class ItemsItemEditRoute extends Route {
  queryParams = {
    container: {
      refreshModel: true,
    },
  };
}
