import { helper } from '@ember/component/helper';

export function formatDate(params/*, hash*/) {
    let date = params[0],
        format = params[1];

    if (typeof(format) !== 'string') {
        format = 'YYYY-MM-DD';
    }

    if (window.moment(date).isValid()) {
        return window.moment(date).format(format);
    }

    return '';
}

export default helper(formatDate);
