import Route from '@ember/routing/route';
import { on } from '@ember/object/evented';

export default Route.extend({
    initPage: on('activate', function () {
        window.scrollTo(0, 0);
    }),

    model(params) {
        this.transitionTo('index');
    }
});