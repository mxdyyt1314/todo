export default {
    isNumber (values) {
        for (let value in values) {
            if (Number.isNaN(value)) {
                return false;
            }
        }
        return true;
    },
    formateDate (timetick) {
        if (typeof timetick === 'undefined') {
            return '';
        }
        let date = new Date(timetick);
        if (date.toString() === 'Invalid Date') {
            return '';
        }
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minuter = date.getMinutes();
        let sencond = date.getSeconds();
        let formatDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minuter + ':' + sencond;
        return formatDate;
    }
}