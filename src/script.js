Vue.createApp({
  data() {
    return {
      text: "",
      todos: [],
      filter: "all",
    };
  },

  methods: {
    newTodoToData() {
      if (this.text.length >= 5) {
        const newTodo = {
          description: this.text,
          done: false,
          hidden: false,
          doneClass: "",
        };
        this.todos.push(newTodo);

        this.text = "";
      } else {
        alert("Your todo must at least have 5 characters.");
      }
    },

    checkTodo(event) {
      const checkbox = event.target;
      const id = checkbox.id;
      this.todos[id].done = checkbox.checked;
      if (checkbox.checked) {
        this.todos[id].doneClass = "done";
      } else {
        this.todos[id].doneClass = "";
      }
    },

    deleteDones() {
      const opens = this.todos.filter((todo) => todo.done === false);
      this.todos = opens;
    },

    showAllHelpFunction() {
      this.todos.forEach((todo) => (todo.hidden = false));
    },

    filterAll() {
      this.showAllHelpFunction();
      this.filter = "all";
    },

    filterOpens() {
      this.showAllHelpFunction();
      const dones = this.todos.filter((todo) => todo.done === true);
      dones.forEach((object) => (object.hidden = true));
      this.filter = "opens";
    },

    filterDones() {
      this.showAllHelpFunction();
      const opens = this.todos.filter((todo) => todo.done === false);
      opens.forEach((object) => (object.hidden = true));
      this.filter = "dones";
    },
  },
}).mount("#app");
