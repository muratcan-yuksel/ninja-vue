//create a vue app
//you can use any name for the constant
//translation: this says create a new app and then... (go below)
const app = Vue.createApp({
  // template: "<h2>I'm the template </h2>",
  data() {
    return {
      showBooks: true,
      books: [
        { title: " name of the lol", author: "someone" },
        { title: " name of the lol", author: "someone" },
        { title: " name of the lol", author: "someone" },
      ],
    };
  },
  methods: {
    toggle() {
      //reverse toggle button :D
      this.showBooks = !this.showBooks;
    },
    handleEvent() {
      console.log("event");
    },
  },
});
//mount that app to this html element with and id of "app"
app.mount("#app");
