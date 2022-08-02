<template lang="pug">
div
  h1 {{slug}}
  p Path: {{$route.path}}
</template>
<script>
export default {
  asyncData({params}){
    return {slug: params.slug}
  }  
}
</script>