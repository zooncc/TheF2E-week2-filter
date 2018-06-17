import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    urlForFindAll(modelName, snapshot) {
        return 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
    },

    urlForQuery(query, modelName) {
        return 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
    }
});