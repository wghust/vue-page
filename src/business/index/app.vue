<style lang="stylus">

</style>

<template>
  <div>
    <tb-card>
      <tb-card-header>
        <h2>铜板街</h2>
      </tb-card-header>
      <tb-card-body class="tb-card-padding">
        <tb-form class="commonForm">
          <tb-form-item label="项目名" position="top" align="left" :sm="6">
            <tb-input v-model="searchForm.projectName" placeholder="请输入项目名">
            </tb-input>
          </tb-form-item>
          <tb-form-item label="姓名" position="top" align="left" :sm="6">
            <tb-input v-model="searchForm.name" placeholder="请输入姓名">
            </tb-input>
          </tb-form-item>
        </tb-form>
        <tb-btn type="primary">提交</tb-btn>
      </tb-card-body>
      <tb-card-footer>
        <!-- 内容 -->
      </tb-card-footer>
    </tb-card>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchForm: {
        projectName: '',
        name: ''
      }
    };
  },

  created () {
    this.getData();
  },

  methods: {
    getData () {
      this.$http.post(url, params, options).then((response) => {
        if (response.ok) {
          // 获取数据成功 200
        } else {
          // 获取数据失败
        }
      }, (error) => {
        if (error) {
          // error，连不上服务器
        }
      });
    }
  }
}
</script>