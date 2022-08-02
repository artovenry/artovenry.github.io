<template lang="pug">
div
  h1 Continent: {{continent}}
  h2 Mountain: {{mountain}}
  p Path: {{$route.path}}
  NuxtLink(to='/') Back to Mountains
</template>
<script>
export default {
  async asyncData({ params, redirect }) {
    const mountains = await fetch('https://api.nuxtjs.dev/mountains')
      .then((res) => res.json())
    const found= mountains.find(m=>
      m.continent.toLowerCase() === params.continent &&
      m.slug === params.mountain
    )
    if(found){
      return {continent: found.continent, mountain: found.title}
    }else{
      redirect('/')
    }
  }
}
</script>