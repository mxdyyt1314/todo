<template>
  <div class="hello">
    <input type="text" v-model="newTodo" v-on:keyup.enter="addNewTodo">
    <h1>未完成</h1>
    <ul>
      <li v-for="todo in notDoneTodos">
        <input type="checkbox" v-model="todo.done"> {{todo.name}} {{todo.createtime|formatDate}}
      </li>
    </ul>
    <hr>
    <h1>已完成</h1>
    <ul>
      <li v-for="todo in doneTodos" class="complete">{{todo.name}}</li>
    </ul>
  </div>
</template>

<script scope="es2016">
export default {
  name: 'hello',
  data() {
    return {
      todos: [],
      newTodo: ''
    }
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
      [].sort(function (a, b) {
        if (a < b) {
          return -1;
        }
        else if (a == b) {
          return 0;
        }
        else {
          return 1;
        }
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
      this.todos.push({ name: this.newTodo, done: false, createtime: Date.now() });
      this.newTodo = '';
    }
  },
  filters: {
    formatDate(timetick) {
      console.log(timetick);
      var date = new Date(timetick);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minuter = date.getMinutes();
      var sencond = date.getSeconds();
      var formatDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minuter + ':' + sencond;
      return formatDate;
    }
  }
}
function createData() {
  console.log('create data');
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
