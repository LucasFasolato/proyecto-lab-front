export const getToday = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

export const makeDateTime = (day, time) => {
    let hour = time.split(":")[0];
    let min = time.split(":")[1];
    let dt = new Date(day).setHours(hour,min);
    //let dt2 = new Date(dt).toISOString();
    return dt;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export function formatDate(date) {
    let data = new Date(date);
    return [
        padTo2Digits(data.getDate()),
        padTo2Digits(data.getMonth() + 1),
        data.getFullYear(),
    ].join('/');
}

export function makeAvatarUrl(user) {
    // Libreria https://github.com/tobiaslins/avatar
    const iniciales = user[0].toUpperCase();
    const baseURL = "https://avatar.tobi.sh/";
    console.log(baseURL + user + ".svg?text=" + iniciales + "&size=30")
    return baseURL + user + ".svg?text=" + iniciales + "&size=1";
}
