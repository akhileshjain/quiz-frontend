export const getQuizMetadata = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    return json;
}

export const addNewQuestion = async () => {

}
