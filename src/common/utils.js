export const urlGenerator = (data) => {
    var formParams = JSON.stringify(data);
    return getUrl() + formParams.replaceAll("\"", '').replaceAll(",", "&").replaceAll(":","=").replaceAll("{", "").replaceAll("}","").replaceAll("none",'0');
}
const getUrl = () => {
    return 'https//myurl.com/?'
}