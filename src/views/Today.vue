<template>
  <div class="container">
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <h1 class="text-info text-black" >Aufgaben für Heute</h1>

    <div class="col">
      <div v-if="error" class="alert alert-danger" @click="error = !error">
        <strong>Error : </strong> Please add the task name first
      </div>
      <form @submit.prevent="addTask">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Enter Task" v-model="taskName">
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
  </div>

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
