import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = "http://localhost:8080/static/";
axios.defaults.timeout = 3000;

const get_request = (url, params) => {
    // return new Promise((resolve, reject) => {
    //     axios.get(url, {params}).then(res => {
    //         resolve(res.data);
    //     }).catch(err => {
    //         reject(err);
    //     })
    // })
    return axios.get(url, {params}).then(res => res.data).catch(err => err);
}
const post_request = (url, params) => {
    // return new Promise((resolve, reject) => {
    //     axios.post(url,qs.stringify(params)).then(res => {
    //         resolve(res.data);
    //     }).catch(err => {
    //         reject(err);
    //     })
    // })
    return axios.post(url,qs.stringify(params)).then(res => res.data).catch(err => err);
}
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // 异常处理
    console.log(error);
    // const { config, code, message } = error
    // if (code === 'ECONNABORTED' || message === 'Network Error') { // 请求超时
    // console.warn(`请求超时，将在_1_秒后重试`)
    // return new Promise(resolve => {
    //     setTimeout(async _ => {
    //         resolve(await axios.request(config))
    //         }, 2000) // 设置发送间隔
    //     })
    // }
    return Promise.reject(error);
});

export {get_request, post_request};