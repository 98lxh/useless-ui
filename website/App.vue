<script lang="ts" setup>import { ref } from 'vue';

const chcked = ref(true)
const handleChange = (newVal) => {
  console.log(newVal)
}

const checks = ref([
  '北京',
  '上海',
  '广州',
  '深圳',
])

const checkVal = ref([
  '北京',
  '深圳'
])

const handleCheckChange = (val) => {
  console.log(val)
}
</script>
<template>
   
  <u-checkbox v-model="chcked" @change="handleChange" :indeterminate="true">checkbox</u-checkbox> 

  <u-checkbox-group v-model="checkVal" @change="handleCheckChange">
    <u-checkbox v-for="c in checks" :label="c" :key="c" />
  </u-checkbox-group>
  <!-- <div>
    <div>
      <u-button type="primary">Primary</u-button>
    <u-button type="success">Success</u-button>
    <u-button type="warning">Warning</u-button>
    <u-button type="danger">Danger</u-button>
    <u-button type="info">Info</u-button>
    </div>
    <div>
    <u-button type="primary" size="small">Small</u-button>
    <u-button type="primary" size="default">Default</u-button>
    <u-button type="primary" size="large">Large</u-button>
    </div>
    <div>
    <u-button type="primary" :loading="loading" >Loading</u-button>
    </div>
    <div>
    <u-button type="primary" icon="user">Loading</u-button>
    </div>
    <div>
    <u-button type="primary" icon="setting" circle></u-button>
    <u-button type="danger" icon="user" circle></u-button>
    </div>

    <div>
      <u-button-group>
        <u-button icon="arrow-left">上一页</u-button>
        <u-button>xxxxx</u-button>
        <u-button>上一页
          <u-icon name="arrow-right"></u-icon>
        </u-button>
      </u-button-group>
    </div> -->

    <!-- <div>
      <u-row>
        <u-col :span="6" style="background:rgba(0,160,233,.7);">col</u-col>
        <u-col :span="6" :offset="3" style="background-color: #00a0e9;">col</u-col>
        <u-col :span="6" :offset="3" style="background:rgba(0,160,233,.7);">col</u-col>
        <u-col :span="6" style="background-color: #00a0e9;">col</u-col>
      </u-row>
    </div>

     <div>
      <u-row :gutter="20" justify="end">
        <u-col :span="8">
          <div style="background:rgba(0,160,233,.7);">Col</div>
        </u-col>
        <u-col :span="8">
          <div style="background-color: #00a0e9;">Col</div>
        </u-col>
        <u-col :span="8">
          <div  style="background:rgba(0,160,233,.7);">Col</div>
        </u-col>
      </u-row>

      <div>
      <u-row :gutter="24">
        <u-col  :xs="24" :sm="8" :md="6" :lg="6" :xl="6">
          <div style="background:rgba(0,160,233,.7);">Col</div>
        </u-col>
        <u-col  :xs="24" :sm="8" :md="6" :lg="6" :xl="6">
          <div style="background-color: #00a0e9;">Col</div>
        </u-col>
        <u-col  :xs="24" :sm="8" :md="6" :lg="6" :xl="6">
          <div  style="background:rgba(0,160,233,.7);">Col</div>
        </u-col>
      </u-row>
    </div>
    </div> -->
  <!-- </div> -->


</template>
