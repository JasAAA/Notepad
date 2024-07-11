const app = new Vue({
  el: "#todoapp",
  data: {
    //initial note
    todoList: ["Python", "Java", "SQL"],
    inputValue: "",
  },

  methods: {
    // add item to the list
    addTodo() {
      this.todoList.push(this.inputValue);
    },
    // delete item from the list
    delTodo(index) {
      this.todoList.splice(index, 1);
    },
    // clear list
    clearTodo() {
      this.todoList = [];
    },
  },
});
