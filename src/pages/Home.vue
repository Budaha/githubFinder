<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!-- search -->
        <searchComponent
          :value="search"
          placeholder="Type username..."
          @search="search = $event"
        />
        <button class="btn btnPrimary" @click="getRepos">Search</button>
        <div class="repos__wrapper" v-if="repos">
          <div class="repos-item" v-for="repo in repos" :key="repo.id">
              <div class="repos-info">
                <a class="link" target="_blank" :href="repo.html_url">{{ repo.name }}</a>
                <span>{{ repo.stargazers_count }} ⭐</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import searchComponent from "@/components/Search.vue";
import axios from "axios"
export default {
  name: "homePage",
  components: { searchComponent },
  data() {
    return {
      search: "",
      repos: null,
    };
  },
  methods: {
    getRepos() {
      axios
      .get(`https://api.github.com/users/${this.search}/repos`)
      .then(res => {
        console.log(res)
        this.repos = res.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
button {
  margin-top: 40px;
}
.repos__wrapper {
  width: 400px;
  margin: 30px 0;
}
.repos-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}
</style>