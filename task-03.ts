const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

type CommentData = {
    id: number;
    email: string;
}

const getData = (url: string) => {
    fetch(url)
        .then((response) => response.json())
        .then((data: CommentData[]) => {
            data.forEach(comment => {
                console.log(`ID: ${comment.id}, Email: ${comment.email}`)
            })
        })
        .catch((error) => {
            console.error('Ошибка данных:', error);
        });
};


getData(COMMENTS_URL)