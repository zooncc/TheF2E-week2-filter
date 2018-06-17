import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';

export default Controller.extend({
    queryParams: ['q'],

    q: '',
    
    displayModel: [],

    filterLabel: [],

    appController: Ember.inject.controller('application'),

    modelObserver: observer('model', function () {
        this.refreshDisplayModel();
    }),

    displayModelCount: computed('displayModel', function () {
        return this.get('displayModel').length;
    }),

    refreshDisplayModel() {
        let result = [];
        
        let filter = this.get('appController.filter');
        this.get('model').forEach(item => {
            let found = true;
            if (filter.location !== null && filter.location.code !== null) {
                if (item.get('Zone') !== filter.location.name) {
                    found = false;
                }
            }

            if (filter.paid && (item.get('Ticketinfo') === '' || item.get('Ticketinfo') === '免費參觀')) {
                found = false;
            }
            
            if ((filter.openAllDday && item.get('Opentime') !== '全天候開放')) {
                found = false;
            }

            if (found) {
                result.push(item);
            }
        });

        this.set('displayModel', result);
        this.refreshFilterLabel();
    },

    refreshFilterLabel() { 
        let result = [];

        let filter = this.get('appController.filter');
        if (filter.location !== null && filter.location.code !== null) {
            result.push({ name: filter.location.name, type: 'location' });
        }

        if (filter.paid) {
            result.push({ name: '付費', type: 'paid' });
        }

        if (filter.openAllDday) {
            result.push({ name: '全天候開放', type: 'openAllDday' });
        }
        
        this.set('filterLabel', result);
    },
    
    actions: {
        delFilterLabel(data) {
            switch (data.type) {
                case 'location':
                    this.set('appController.filter.' + data.type, { code: null, name: "全部" });    
                    break;    
                case 'paid':
                    this.set('appController.filter.' + data.type, false);
                    break;
                case 'openAllDday':
                    this.set('appController.filter.' + data.type, false);      
                    break;
            }
        },

        goDetails(data) {
            this.transitionToRoute('content', data);
        }
    }
});