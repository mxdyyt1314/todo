<template>
    <ul>
        <li v-for="todo in notDoneTodos">
            <input type="checkbox" v-model="todo.done"> {{todo.name}} {{todo.createtime|formatDate}}
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

</style>
