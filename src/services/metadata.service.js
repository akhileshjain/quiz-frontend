import * as Constants from '../common/constants';

export const getQuizMetadata = async () => {
    const response = await fetch(Constants.BASE_URL + '/metadata/categories');
    const json = await response.json();
    return json;
}
