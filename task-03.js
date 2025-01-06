"use strict";
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const getData = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        data.forEach(comment => {
            console.log(`ID: ${comment.id}, Email: ${comment.email}`);
        });
    })
        .catch((error) => {
        console.error('Ошибка данных:', error);
    });
};
getData(COMMENTS_URL);
