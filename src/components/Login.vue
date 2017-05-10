<template>
    <div class="login">
        <div>
            <label for="">账号：</label>
            <input type="text" v-model="username" v-on:keyup.enter="login">
        </div>
        <div>
            <label for="">密码：</label>
            <input type="password" v-model="password" v-on:keyup.enter="login">
        </div>
        <div class="msg" v-bind:class="{err:iserr}">{{loginmsg}}</div>
        <div>
            <button type="submit" @click.preventDefault="login">登录</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            loginmsg: '',
            iserr: true
        }
    },
    methods: {
        login: function () {
            var self = this;
            this.$ajax({
                method: 'get',
                url: '/api/login',
                params: {
                    username: this.username,
                    password: this.password
                }
            }).then(function (res) {
                console.log(res);
                if (res.data.code < 0) {
                    self.loginmsg = '登录失败';
                    self.iserr = true;
                    return;
                }
                self.iserr = false;
                self.loginmsg = '登录成功';
                localStorage.token = res.data.token;
                self.$router.push('/');
            }).catch(function (res) {
                console.log(res);
            });
        }
    }
}
</script>

<style lang="scss">
.err {
    color: red;
}
</style>
