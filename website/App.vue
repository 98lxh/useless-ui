<script lang="ts" setup>import { ref } from 'vue';

  const loading = ref(true)

</script>
<template>
  <div>
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
  </div>
</template>
