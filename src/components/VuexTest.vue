<template>
    <div class="test">
        我是个测试组件 {{count}}
        <div>{{doneTodos}}</div>
        <button @click="increseCount">count++</button>
        <button @click="incrementAsync">分发action</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { MUTATIONS_INCREMENT } from '../store/mutation-types'
export default {
    computed: mapState({
        count: state => state.count,
        doneTodos: (state, getter) => getter.doneTodos
    }),
    methods: {
        increseCount() {
            this.$store.commit({ type: MUTATIONS_INCREMENT, amount: 3 });
        },
        incrementAsync() {
            this.$store.dispatch({ type: 'incrementAsync', amount: 3 });
        }
    }
}
</script>

<style lang="scss">

</style>

