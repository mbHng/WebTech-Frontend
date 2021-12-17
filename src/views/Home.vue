<template>
  <div class="container">
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <h1 class="text-info text-black">Aufgaben für Heute</h1>

    <div class="col">
      <div v-if="error" class="alert alert-danger" @click="error = !error">
        <strong>Error : </strong> Please add the task name first
      </div>
      <form @submit.prevent="addTask">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Enter Task" v-model="taskName">
          <input type="text" placeholder="DD/MM/YY" class="todo-input" v-model="DueBy" maxlength="8" size="8">
          <button class="btn btn-warning" type="submit" id="Enter">ENTER</button>
        </div>
      </form>
    </div>
    <button v-if="deleteMultiple" class="btn btn-danger mb-3" @click="deleteMulti">Delete Selected</button>
    <ul class="list-group-item">
      <li v-for="(task_name, index) in tasks" :key="index" class="list-group-item list-group-item-info"
          style="height: 35px; padding:  5px 20px; margin: auto">
        <div class="row">
          <div class="col-1">
            <input class="form-check-input me-1" type="checkbox" :checked="task_name['check']" @change="changeCheck"
                   :id="task_name['index']" style="position:absolute; left:5px">
          </div>
          <div class="col" @click="loadData(index)">{{ task_name['task'] }}</div>
        </div>
      </li>
    </ul>
  </div>S

</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      title: 'ToDo List',
      taskName: '',
      tasks: [
        { index: 0, task: 'Test Test', check: false },
        { index: 1, task: 'Test Test Test', check: false },
        { index: 2, task: 'Sport', check: true }
      ],
      error: false,
      update: false,
      updateIndex: null,
      ids: [],
      deleteMultiple: false
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/w1/Today'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
}
</script>
