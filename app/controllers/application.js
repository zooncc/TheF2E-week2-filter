import Controller from '@ember/controller';
import {observer} from '@ember/object';

export default Controller.extend({
    indexController: Ember.inject.controller('index'),

    qInput: '',

    locationOptions: [
        { code: null, name: "全部" }
        , { code: 800, name: "新興區" }
        , { code: 801, name: "前金區" }
        , { code: 802, name: "苓雅區" }
        , { code: 803, name: "鹽埕區" }
        , { code: 804, name: "鼓山區" }
        , { code: 805, name: "旗津區" }
        , { code: 806, name: "前鎮區" }
        , { code: 807, name: "三民區" }
        , { code: 811, name: "楠梓區" }
        , { code: 812, name: "小港區" }
        , { code: 813, name: "左營區" }
        , { code: 814, name: "仁武區" }
        , { code: 815, name: "大社區" }
        , { code: 820, name: "岡山區" }
        , { code: 821, name: "路竹區" }
        , { code: 822, name: "阿蓮區" }
        , { code: 823, name: "田寮區" }
        , { code: 824, name: "燕巢區" }
        , { code: 825, name: "橋頭區" }
        , { code: 826, name: "梓官區" }
        , { code: 827, name: "彌陀區" }
        , { code: 828, name: "永安區" }
        , { code: 829, name: "湖內區" }
        , { code: 830, name: "鳳山區" }
        , { code: 831, name: "大寮區" }
        , { code: 832, name: "林園區" }
        , { code: 833, name: "鳥松區" }
        , { code: 840, name: "大樹區" }
        , { code: 842, name: "旗山區" }
        , { code: 843, name: "美濃區" }
        , { code: 844, name: "六龜區" }
        , { code: 845, name: "內門區" }
        , { code: 846, name: "杉林區" }
        , { code: 847, name: "甲仙區" }
        , { code: 848, name: "桃源區" }
        , { code: 849, name: "那瑪夏區" }
        , { code: 851, name: "茂林區" }
        , { code: 852, name: "茄萣區" }
    ],

    filter: {
        location: null,
        paid: false,
        openAllDday: false
    },

    filterLocationChanged: observer('filter.location', function () {
        this.refreshData();
    }),

    filterPaidChanged: observer('filter.paid', function () {
        this.refreshData();
    }),

    filterOpenAllDdayChanged: observer('filter.openAllDday', function () {
        this.refreshData();
    }),

    init() {
        this.set('filter.location', this.get('locationOptions')[0]);
    },

    refreshData() {
        this.get('indexController').refreshDisplayModel();
    },

    actions: {
        goSearch() {
            this.transitionToRoute('index', { queryParams: { q: this.get('qInput') } });
        },

        selectLocation(data) {
            this.set('filter.location', data);
        }
    }
});
