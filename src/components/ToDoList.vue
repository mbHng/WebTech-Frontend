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
    <button v-if="deleteMultiple" class="btn btn-danger mb-3" @click="deleteMulti">Delete Selected</button>
    <ul class="list-group" >
      <li v-for="(task_name, index) in tasks" :key="index" class="list-group-item list-group-item-info" style="height: 35px; padding:  5px 20px; margin: auto">
        <div class="row">
          <div class="col-1">
            <input type="checkbox" :checked ="task_name['check']" @change="changeCheck" :id="task_name['index']" class="form-control" size="10px" >
          </div>
          <div class="col" @click="loadData(index)">{{ task_name['task'] }}</div>
        </div>
      </li>
    </ul>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Due by</th>
        <th scope="col" class="text-center">Status</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{ tasks }}</td>
        <td> {{}}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ToDoList2',
  data () {
    return {
      tasks: []
    }
  }
}
</script>

<style>

</style>
