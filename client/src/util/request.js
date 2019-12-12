import axios from 'axios';

const axioIn = axios.create({
    timeout: 40000,
    withCredentials: true,
    baseURL: 'http://172.16.62.201:8080/'
})
// 请求成功后的response 集合

axioIn.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error.response);
});
// 请求服务端的request 集合
axioIn.interceptors.request.use(response => {
    const queryTime = new Date().getTime();
    response.headers.Authorization = 'paxWfmCAe2Zfxw3VgeAZh9Dsk8BlsPaPFgayiiC9JVABdL06fAxdRhjX6VA7BRCT';
    response.url += `?_=${queryTime}`
    return response;

}, error => {

})

export default axioIn