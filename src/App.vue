<template>
    <div id="app">
        <van-nav-bar
            title="展会"
            left-text="返回"
            right-text="按钮"
            :left-arrow="leftArrow"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <router-view />
        <van-tabbar route>
            <van-tabbar-item replace to="/" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/my" icon="contact">
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            active: 0,
        };
    },

    computed: {
        leftArrow() {
            return true
        }
    },

    methods: {
        onClickLeft() {
            this.$store.commit('increment')
            Toast('返回');
        },
        onClickRight() {
            Toast('按钮');
        },
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
