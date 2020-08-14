<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Rangi
      </h1>
      <h3 class="subtitle">A color gradient generator</h3>
      <div class="links">
        <nuxt-link to="/two-color-gradient" class="button--green">
          Two color gradient
        </nuxt-link>
        <nuxt-link to="/three-color-gradient" class="button--grey">
          Three color gradient
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 600;
  font-size: 5rem;
  color: #35495e;
  letter-spacing: 2px;
}

.subtitle {
  font-weight: 400;
  font-size: 1.5rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
