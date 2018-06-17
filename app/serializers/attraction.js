import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    keyForAttribute(attr, method) {
        return attr;
    },

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        let data = [];
        payload.result.records.forEach(item => {
           let attr = {};
           attr.id = item.Id;
           attr.type = 'attraction';
           attr.attributes = item;
           data.push(attr);
        });
        payload.data = data;

        payload.meta = {};
        payload.meta.links = payload.result._links;

        delete payload.result;
        delete payload.help;
        delete payload.success;

        return this._super(...arguments);
    }
});
