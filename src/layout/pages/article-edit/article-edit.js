export default {
  name: 'RegUser',
  created: function () {
    this.setNowDate();
  },
  data () {
    return {
      date: '',
      title: '',
      tagLine: '',
      image: '',
      content: ''
    }
  },
  methods: {
    setNowDate () {
      let d = new Date();
      let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      //let nowDate = d.toDateString();
      // let curr_date = nowDate.getDate();
      //let curr_month = d.getMonth().toString();
      // let curr_year = nowDate.getFullYear();

      //this.date = (curr_month + ' ' + curr_date + ', ' + curr_year );
      this.date = d.toLocaleString("en-US", options);
    },
  }
}
