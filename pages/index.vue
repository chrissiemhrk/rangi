<template>
  <div
    class="container mx-auto min-h-screen flex justify-center items-center text-center"
  >
    <div>
      <Logo />
      <h1 class="title block font-semibold text-gray-800 text-5xl">
        Rangi
      </h1>
      <h3 class="subtitle font-normal text-lg text-gray-700 pb-5">
        A color gradient generator
      </h3>
      <div class="links pt-5 flex flex-col md:flex-row">
        <nuxt-link
          to="/two-color-gradient"
          class="inline-block border-2 border-primary-900 py-2 px-5 mb-5 rounded-md md:mr-10"
        >
          Two color gradient
        </nuxt-link>
        <nuxt-link
          to="/three-color-gradient"
          class="inline-block border-2 border-primary-900 py-2 px-5 mb-5 rounded-md"
        >
          Three color gradient
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
