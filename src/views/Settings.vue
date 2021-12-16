<template>
  <div class="container">
    <h2 class="text-center mt-5"> My ToDo List</h2>

    <div class="col">
      <div v-if="error" class="alert alert-danger" @click="error = !error">
        <strong>Error : </strong> Please add the task name first
      </div>
      <form @submit.prevent="addTask">
        <div class="d-flex">
          <input type="text" placeholder="Enter task" class="todo-input" v-model="newTask" size="111" @keyup.enter="addTask">
          <input type="text" placeholder="DD/MM/YY" class="todo-input" v-model="DueBy" maxlength="8" size="8">
          <button class="btn btn-warning rounded-0">ENTER</button>
          </div>
      </form>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Due by</th>
        <th scope="col" class="text-center">Status</th>
      </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ToDoList2',
  data () {
    return {
      fields: [
        { key: 'taskName' },
        { key: 'Due by' },
        { key: 'Status' }
      ],
      error: false,
      update: false,
      updateIndex: null,
      ids: [],
      deleteMultiple: false
    }
  }
}
</script>

<style>

</style>
