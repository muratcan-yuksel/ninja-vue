//create a vue app
//you can use any name for the constant
//translation: this says create a new app and then... (go below)
const app = Vue.createApp({
  // template: "<h2>I'm the template </h2>",
  data() {
    return {
      title: "empire strikes back",
      theDude: "Darth Vader",
      year: 1433,
    };
  },
  methods: {
    changeTitle(titre) {
      // console.log("you clciked");
      //"this" represents the entire app component
      // this.title = "brudas of peace";
      this.title = titre;
    },
  },
});
//mount that app to this html element with and id of "app"
app.mount("#app");
// woooow. I have a real html saying something different, and whenever I comment out the tamplate in const app,
//this one overwrites the html I wrote in index.html
//That means dynamic updates
