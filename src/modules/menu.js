const menu = () => {

    const restaurant = 'food-band';

    const renrederItems = (data) => {
        console.log(data);
    }


    // fetch асинхронный метод , по умолчанию у этого меода свойство method: 'GET' 
    //     `./db/${restaurant}.json`
    fetch('https://test-b8c19-default-rtdb.firebaseio.com/db/partners.json', { // загрузили json файлы из папки db на firebase
        method: 'GET'
    })
        .then((response) => response.json()) // вернет массив [{}, {}, {}, {}, {}]
        .then((data) => { // перелаем  даные полученные от сервера- json
            renrederItems(data);
        })
        .catch((error) => { //  обрабатываем ошибку
            console.log(error);
        })
    // .finally(console.log('Ошибка'))// выполнится в любом случае

    // firebase нужен дл эмуляции работы с сервером(облачное хранилище)
}

export default menu