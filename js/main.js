const { createApp } = Vue;

createApp({
   data() {
      return {
         newTask: '',
         tasks: [
            {
               text: 'lavare i piatti',
               done: false
            },
            {
               text: 'idratati',
               done: true
            }
         ],
         logo: 'img/logo.png'
      }
   },
   methods: {
      addTask() {
         if (this.newTask.trim()) {
            this.tasks.unshift({text: this.newTask.trim(), done:false});
            this.newTask = '';
            this.inputError = false;
         }
      },
      removeTask(index) {
         this.tasks.splice(index, 1);
         console.log(this.tasks);
      }
}
}).mount('#app');