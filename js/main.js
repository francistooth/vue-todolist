const { createApp } = Vue;

createApp({
   data() {
      return {
         newTask: '',
         tasks: [],
         logo: 'img/logo.png'
      }
   },
   methods: {
      addTask() {
         if (this.newTask.trim()) {
            this.tasks.push(this.newTask.trim());
            this.newTask = '';
         }
      },
      removeTask(index) {
         this.tasks.splice(index, 1);
         console.log(this.tasks);
      }
}
}).mount('#app');