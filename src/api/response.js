import { Toast } from "vant";
/**
 * 请求返回数据处理
 */
export const responseHandler = (res) => {
    const originData = res.data || {};
    if (originData.data === 'token失效') {
        Toast.fail('token失效')
        setTimeout(() => {
            window.location.href = '/'; // token失效重新登录
        }, 1000)
    } else {
        if (
            Object.prototype.hasOwnProperty.call(originData, "result") &&
            Object.prototype.hasOwnProperty.call(originData, "code")
        ) {
            return new Promise((resolve, reject) => {
                if (originData.code == 0) {
                    resolve(originData.data);
                } else {
                    Toast.fail('请求出错')
                    reject(originData);
                }
            });
        }
    }
};
