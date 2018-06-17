import Route from '@ember/routing/route';
import { on } from '@ember/object/evented';

export default Route.extend({
    queryParams: {
        q: { refreshModel: true }
    },

    initPage: on('activate', function () {
        window.scrollTo(0, 0);
    }),

    model(params) {
       if (params.q === '') {
           return this.get('store').findAll('attraction');
        }
       else {
            return this.get('store').query('attraction', params);
        }
    }
});
