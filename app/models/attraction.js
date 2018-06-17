import DS from 'ember-data';
import EmberObject, { computed } from '@ember/object';

export default DS.Model.extend({
    _id: DS.attr('number'),
    Id: DS.attr('string'),
    Name: DS.attr('string'),
    Zone: DS.attr('string'),
    Toldescribe: DS.attr('string'),
    Description: DS.attr('string'),
    Tel: DS.attr('string'),
    Add: DS.attr('string'),
    Travellinginfo: DS.attr('string'),
    Opentime: DS.attr('string'),
    Picture1: DS.attr('string'),
    Picdescribe1: DS.attr('string'),
    Gov: DS.attr('string'),
    Px: DS.attr('number'),
    Py: DS.attr('number'),
    Class1: DS.attr('number'),
    Class2: DS.attr('number'),
    Level: DS.attr('number'),
    Website: DS.attr('string'),
    Parkinginfo_px: DS.attr('number'),
    Parkinginfo_py: DS.attr('number'),
    Ticketinfo: DS.attr('string'),
    Remarks: DS.attr('string'),
    Changetime: DS.attr('date'),
    IsShowTicketinfo: computed('Ticketinfo', function () {
        return (this.get('Ticketinfo') === '免費參觀');
    }),
    IsShowOpentime: computed('Opentime', function () {
        return (this.get('Opentime') === '全天候開放');
    })
});
