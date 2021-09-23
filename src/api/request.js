/*
 * @Author: your name
 * @Date: 2020-10-29 17:01:42
 * @LastEditTime: 2021-02-02 14:12:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \work\data-assets\src\api\request.js
 */
import axios from "axios";
import qs from "qs";
import { responseHandler } from "./response";
import Cookie from "js-cookie";

axios.defaults.timeout = 10000;

/**
 * 请求头参数规则 token + client + version + language + timezone
 */
function getAuthenticator() {
    return Cookie.get("crm_ticket");
}

/**
 * 普通get请求
 */
export const get = async function (url, params = {}) {
    let res = await axios.get(url, {
        params,
        headers: {
            'Avengers-oauth': getAuthenticator(),
        },
    });
    return responseHandler(res);
};

//删除deleteReq请求
export const deleteReq = async function (url, params = {}) {
    let res = await axios.delete(url, {
        params,
        headers: {
            'Avengers-oauth': getAuthenticator(),
        },
    });
    return responseHandler(res);
};

//更新putReq请求
export const putReq = async function (url, params = {}) {
    let res = await axios.put(url, params, {
        headers: {
            'Avengers-oauth': getAuthenticator(),
        },
    });
    return responseHandler(res);
};

/**
 * 普通post请求
 */
export const post = async function (url, params = {}) {
    let res = await axios.post(url, qs.stringify(params), {
        headers: {
            'Avengers-oauth': getAuthenticator(),
        },
    });
    return responseHandler(res);
};

/**
 * json格式的Post请求
 */
export const postJson = async function (url, params = {}, time) {
    let res = await axios.post(url, params, {
        headers: {
            "Content-Type": "application/json",
            'Avengers-oauth': getAuthenticator(),
            timeout: time ? time : 10000,
        },
    });
    return responseHandler(res);
};


/**
 * json格式的Post请求---登录请求
 */
export const postJsonLogin = async function (url, params = {}, time) {
    let res = await axios.post(url, params, {
        headers: {
            "Content-Type": "application/json",
            timeout: time ? time : 10000,
        },
    });
    return responseHandler(res);
};

/**
 * postBody请求
 * @param url
 * @param params
 * @returns {*}
 */
export const postRaw = async function (url, params = {}, bodyParams = []) {
    let res = await axios.post(url + "?" + qs.stringify(params), bodyParams, {
        headers: {
            'Avengers-oauth': getAuthenticator(),
        },
    });
    return responseHandler(res);
};
