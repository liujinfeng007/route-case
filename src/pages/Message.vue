<template>
  <ul>
    <li v-for="item in msgList" :key="item.id">
      <!--      <router-link :to="`/home/msg/detail?id=${item.id}&title=${item.title}`">{{ item.title }}</router-link>-->
      <!--      <router-link :to="{
              path:'/home/msg/detail',
              query:{
                id:item.id,
                title:item.title
              }
            }">{{ item.title }}-->
      <router-link :to="{
              name:'detail',
              query:{
                id:item.id,
                title:item.title
              }
            }">{{ item.title }}
      </router-link>

      <button @click="pushShow(item)">push查看</button>
      <button @click="replaceShow(item)">replace查看</button>
      <!--      <router-link :to="`/home/msg/detail/${item.id}/${item.title}`">{{ item.title }}</router-link>-->
      <!--      <router-link :to="{
                    name:'detail',
                    params:{
                      id:item.id,
                      title:item.title
                    }
                  }">{{ item.title }}
            </router-link>-->

    </li>
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      msgList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'}
      ]

    }
  },
  methods: {
    pushShow(item) {
      this.$router.push({
            name: 'detail',
            params: {
              id: item.id,
              title: item.title
            }
          }
      )
    },
    replaceShow(item) {
      this.$router.replace({
            name: 'detail',
            params: {
              id: item.id,
              title: item.title
            }
          }
      )
    }
  }
  /* mounted() {
     console.log('@msg', this)
   }*/
}
</script>

<style scoped>

</style>