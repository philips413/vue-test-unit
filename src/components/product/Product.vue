<template>
  <div>
    {{message}}
  </div>
</template>

<script>
import ProductService from "../../service/ProductService.js";
export default {
  name: "Product",
  mounted() {
    this.message = '김도령'
  },
  data () {
    return {
      message: '',
      prdtSysId: 33,
      productService: new ProductService()
    }
  },
  methods: {
    getResultMessage: function (msg) {
      return msg;
    }
  }
}
</script>

<style scoped>

</style>