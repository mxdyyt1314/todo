<template>
    <ul class="tasklist">
        <li v-for="todo in todos" :class="{err:todo.done}">
            <input type="checkbox" v-model="todo.done" @change="changeStatus(todo)"> {{todo.name}}
            <span class="time">创建时间：{{todo.createtime|formatDate}}</span>
            <span class="time">修改时间：{{todo.updatetime|formatDate}}</span>
        </li>
    </ul>
</template>

<script>
import util from '../common/util.js'
export default {
    //注意在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。
    props: ["todos"],
    filters: {
        formatDate: util.formatDate
    },
    methods: {
        changeStatus(todo) {
            todo.updatetime = Date.now();
        },

    }
}

</script>

<style lang="scss">
.tasklist {
    .err {
        color: rgb(192, 204, 192);
        text-decoration: line-through;
    }
    .time {
        font-size: xx-small;
        font-weight: bold;
    }
}
</style>
