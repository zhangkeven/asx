<template>
  <div style="width: 100%">
    <p>这是查看更多页面</p>
    <p>id的值为 {{id}}</p>
    <p>name的值为 {{name}}</p>
  </div>
</template>
<script>
  export default {
    // name: 'Main',
    data () {
      return {
        id:'',
        name:'',
        imgs:[
          {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
          {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
          {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
          {imgUrl:'../assets/img/banner.png',url:'http://www.baidu.com'},
        ]
      }
    },
    methods: {

    },
    mounted () {
      console.log('id的值为',this.$route.params.id);
      console.log('name的值为',this.$route.params.name);
      this.id=this.$route.params.id;
      this.name=this.$route.params.name;
    },
    created(){

    }
  }
</script>
<style>

</style>
