/**
 * 
 * @param {*} text Le text a decoupé
 * @param {*} delimit La delimitation
 */
const sliceText = (text, delimit) => {
    if (text.length > delimit) {
        return text.substring(0, delimit) + '...';
    } else {
        return text;
    }
}

/**
 * Modelisation de la date
 * @param {*} date La date
 */
const  customDate = (date) => {
    var myDate = new Date(date),
        jour = function () {

            return parseInt(myDate.getDate()) < 10 ? '0' + myDate.getDate() : myDate.getDate();
        },
        mois = function () {

            //return myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1
            var month = myDate.getMonth() + 1;

            //La date par rapport à sa nomination
            switch (month) {
                case 1:
                    return 'janvier';
                case 2:
                    return 'février';
                case 3:
                    return 'mars';
                case 4:
                    return 'avril';
                case 5:
                    return 'mai';
                case 6:
                    return 'juin';
                case 7:
                    return 'juillet';
                case 8:
                    return 'août';
                case 9:
                    return 'septembre';
                case 10:
                    return 'octobre';
                case 11:
                    return 'novembre';
                case 12:
                    return 'décembre';
                default:
                    return null;
            }
        },
        heure = function () {

            return myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours();

        },
        minute = function () {

            return myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes();

        };

    return jour() + ' ' + mois() + ' ' + myDate.getFullYear() + ' à ' + heure() + 'h' + minute() + 'min';
}

/**
 * Modelisation de la date en toute lettre
 * @param {*} date La date
 */
const customDateLetters = (date) => {
    var myDate = new Date(date),
        jour = function () {

            return parseInt(myDate.getDate()) < 10 ? '0' + myDate.getDate() : myDate.getDate();
        },
        mois = function () {

            //return myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1
            var month = myDate.getMonth() + 1;

            //La date par rapport à sa nomination
            switch (month) {
                case 1:
                    return 'janvier';
                case 2:
                    return 'février';
                case 3:
                    return 'mars';
                case 4:
                    return 'avril';
                case 5:
                    return 'mai';
                case 6:
                    return 'juin';
                case 7:
                    return 'juillet';
                case 8:
                    return 'août';
                case 9:
                    return 'septembre';
                case 10:
                    return 'octobre';
                case 11:
                    return 'novembre';
                case 12:
                    return 'décembre';
                default:
                    return null;
            }
        },
        heure = function () {

            return myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours();

        },
        minute = function () {

            return myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes();

        };

    return {
        jour : jour(),
        mois : mois(),
        heure : heure(),
        minute : minute()
    }
}

export { sliceText, customDate, customDateLetters }