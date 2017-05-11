<template>
  <div class="hello">
    <input type="text" v-model="newTodo" placeholder="填写任务并enter" v-on:keyup.enter="addNewTodo">
    <h2>未完成</h2>
    <task-list v-bind:todos="notDoneTodos"></task-list>
    </ul>
    <hr>
    <h2>已完成</h2>
    <task-list v-bind:todos="doneTodos"></task-list>
    <hr>
    <h2>全部</h2>
    <task-list v-bind:todos="todos"></task-list>
  </div>
</template>

<script>
import taskList from './TaskList';

export default {
  name: 'hello',
  data() {
    return {
      todos: [],
      newTodo: ''
    }
  },
  components: {
    taskList
  },
  computed: {
    doneTodos() {
      return this.todos.filter(function (ele) {
        return ele.done;
      });
    },
    notDoneTodos() {
      return this.todos.filter(function (ele) {
        return !ele.done;
      });
    }
  },
  mounted() {
    if (!window.localStorage.token) {
      console.log('您没有登录');
      this.$router.push('login');
    }
    this.createData();
  },
  methods: {
    createData() {
      var self = this;
      this.$ajax({
        method: 'get',
        url: '/api/task/query'
      }).then(function (res) {
        if (res.data.code == 0) {
          self.todos = res.data.data;
        }
      }).catch(function (res) {
        console.log(res);
      });
    },
    addNewTodo() {
      if (!this.newTodo) {
        return;
      }
      this.todos.push({ name: this.newTodo, done: false, createtime: Date.now(), updatetime: Date.now() });
      this.newTodo = '';
    }
  }
}
</script>

<style lang="scss">
.hello {
  .complete {
    text-decoration: line-through;
    color: rgb(72.2%, 74.9%, 72.2%);
  }
}
</style>
