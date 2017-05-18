<template>
  <div class="hello">
    <input type="text" v-model="newTodo" placeholder="填写任务并enter" v-on:keyup.enter="addNewTodo">
    <div>
      <h2>未完成</h2>
      <task-list v-bind:todos="notDoneTodos" v-on:removeTodo="removeTodo"></task-list>
      <hr>
    </div>
    <div>
      <h2>已完成</h2>
      <task-list v-bind:todos="doneTodos" v-on:removeTodo="removeTodo"></task-list>
      <hr>
    </div>
    <div>
      <h2>全部</h2>
      <task-list v-bind:todos="Todos" v-on:removeTodo="removeTodo"></task-list>
    </div>
  </div>
</template>

<script>
import taskList from './TaskList';
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'hello',
  data() {
    return {
      newTodo: ''
    }
  },
  components: {
    taskList
  },
  computed: {
    ...mapState({
      Todos: 'todos'
    }),
    ...mapGetters({
      doneTodos: 'doneTodos',
      notDoneTodos: 'notDoneTodos'
    })
  },
  mounted() {
    if (!window.localStorage.token) {
      console.log('您没有登录');
      this.$router.push('login');
    }
    this.createData();
  },
  methods: {
    ...mapActions({
      createData: 'getTodos'
    }),
    addNewTodo() {
      if (this.newTodo === '') {
        console.log('任务名称不能为空');
        return;
      }
      this.$store.dispatch({ type: 'AddNewTodo', newtodo: this.newTodo });
      this.newTodo = '';
    },
    removeTodo(index) {
      this.$store.dispatch({ type: 'RemoveTodo', index: index });
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
