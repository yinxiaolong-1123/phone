<template>
    <div class="login">
        <div class="login-container">
            <!-- <h3>龙氏集团</h3> -->
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="请填写用户名"
                    :rules="[{ required: true, message: '' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="请填写密码"
                    :rules="[{ required: true, message: '' }]"
                />
                <div class="password">
                    <van-checkbox v-model="checked">记住密码</van-checkbox>
                    <span>忘记密码</span>
                </div>
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">提交</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
// import { post } from 'api/request';
import { Toast } from "vant";
export default {
    name: 'login',
    components: {
       
    },
    data() {
        return{
            username: '',
            password: '',
            checked: false,
        }
    },
    methods: {
        onSubmit() {
            if(this.username === 'yinxiaolong' && this.password==='yxl@123') {
                this.$router.push({
                    path: '/info'
                })
            }else{
                Toast.fail('用户名不存在或者密码错误')
            }
            // post('/api/long/login', {
            //     username: this.username,
            //     password: this.password
            // }).then(() => {
            //     this.$router.push({
            //         path: '/info'
            //     })
            // })
        },
    },
}
</script>

<style scoped>
    .login{
        background: #ffffff;
        width: 100%;
        height: 100vh;
        border-radius: 5px;
    }
    .login-container{
        width: 90%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .login-container, p{
        text-align: center;
    }
    .password{
        padding: 20px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
    }
    .password > :last-child{
        color: #f90;
    }
</style>
