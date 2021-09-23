<template>
    <div>
        <div class="postion" v-for="item in list" :key="item.id">
            <van-card
            class="car-width"
            :num="item.id"
            :price="item.price"
            :desc="item.desc"
            :title="item.title"
            :thumb="item.imgUrl"
            />
            <van-checkbox @change="change(item)" class="checkbox" v-model="item.checked"></van-checkbox>
        </div>
        <div class="settlement">
            <div class="settlement-postion">
                <van-checkbox @change="changeAll" v-model="checked">全选</van-checkbox>
                <van-button @click="settlement" round type="danger" size="mini">结算</van-button>
                <span>￥{{money}}</span>
            </div>
        </div>

        <van-share-sheet
        v-model="showShare"
        title="支付方式"
        :options="options"
        @select="onSelect"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
            showShare: false,
            money: 0,
            options: [
                { name: '微信', icon: 'wechat', url: 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb' },
                { name: '支付宝', icon: 'weibo', url: 'https://openapi.alipaydev.com/gateway.do' },
            ],
            list: [
                {
                    price: 5.99,
                    desc: '描述信息',
                    title: "商品标题",
                    imgUrl: require('../../assets/1.webp'),
                    id: 0,
                    checked: false
                },
                {
                    price: 5.99,
                    desc: '描述信息',
                    title: "商品标题",
                    imgUrl: require('../../assets/1.webp'),
                    id: 1,
                    checked: false
                },
                {
                    price: 5.99,
                    desc: '描述信息',
                    title: "商品标题",
                    imgUrl: require('../../assets/1.webp'),
                    id: 2,
                    checked: false
                },
                {
                    price: 5.99,
                    desc: '描述信息',
                    title: "商品标题",
                    imgUrl: require('../../assets/1.webp'),
                    id: 3,
                    checked: false
                },
                {
                    price: 5.99,
                    desc: '描述信息',
                    title: "商品标题",
                    imgUrl: require('../../assets/1.webp'),
                    id: 4,
                    checked: false
                },
                {
                    price: 5.99,
                    desc: '描述信息',
                    title: "商品标题",
                    imgUrl: require('../../assets/1.webp'),
                    id: 5,
                    checked: false
                },
                {
                    price: 5.99,
                    desc: '描述信息',
                    title: "商品标题",
                    imgUrl: require('../../assets/1.webp'),
                    id: 6,
                    checked: false
                },
                {
                    price: 5.99,
                    desc: '描述信息',
                    title: "商品标题",
                    imgUrl: require('../../assets/1.webp'),
                    id: 7,
                    checked: false
                },
            ]
        }
    },

    methods: {
        change(val) {
            if(val.checked === true) {
                this.money +=  val.price;
            }
        },

        changeAll(val) {
            this.money = 0;
            if(val === true) {
                this.list.forEach(item => {
                    item.checked = true
                });
            }else{
                this.money = 0;
                this.list.forEach(item => {
                    item.checked = false;
                });
            }
        },

        settlement() {
            this.showShare = true;
        },

        onSelect(option) {
            this.showShare = false;
            window.location.href = option.url;
        },
    }
}
</script>

<style scoped>
.checkbox{
    position: absolute;
    left: 5px;
    top: 42px;
}
.postion{
    position: relative;
}
.van-card__header{
    margin-left: 20px;
}
.settlement{
    position: fixed;
    bottom: 50px;
    width: 100%;
    background: #ffffff;
    height: 40px;
}
.settlement-postion{
    margin-top: 10px;
}
.settlement-postion :first-child{
    float: left;
    margin-left: 2px;
}
.settlement-postion :last-child{
    float: right;
    margin-right: 10px;
}
.settlement-postion :nth-child(2){
    float: right;
    margin-right: 10px;
}
</style>