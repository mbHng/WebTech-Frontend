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
  },
  updated: function () {
    console.log('UPDATED----')
    this.tasks.forEach((task) => {
      console.log(task.task, '--', task.check)
    })
    console.log('----')
  },
  methods: {
    deleteMulti: function (e) {
      this.tasks.forEach((task) => {
        console.log(task.task, task.check)
      })
      console.log('----')
      var ids = []
      this.tasks.forEach((task) => {
        if (task.check === true) {
          ids.push(task.index)
        }
      })
      ids.forEach(id => {
        this.tasks = this.tasks.filter(function (task) {
          return task.index !== id
        })
      })
      this.deleteMultiple = false
      this.tasks.forEach((task) => {
        console.log('DELETE:', task.task, task.check)
      })
    },
    changeCheck: function (e) {
      this.tasks[e.target.id].check = e.target.checked
      var count = 0
      this.tasks.forEach((task) => {
        if (task.check === true) {
          count = count + 1
        }
      })
      this.deleteMultiple = (count > 0)
      console.log('changeCheck')
      this.tasks.forEach((task) => {
        console.log(task.task, task.check)
      })
    },
    loadData: function (index) {
      console.log(this.tasks)
      this.taskName = this.tasks[index].task
      this.updateIndex = index
      this.update = true
    },
    addTask: function () {
      if (this.update === true) {
        this.update = false
        this.tasks[this.updateIndex].task = this.taskName
      } else {
        var theIndex = this.tasks.length
        if (this.taskName !== '') {
          this.tasks.push({
            index: theIndex,
            task: this.taskName,
            check: false
          })
        } else {
          this.error = true
        }
      }
      this.taskName = ''
    }
  }
}
</script>
