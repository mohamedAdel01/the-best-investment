<template>
  <div>
    <ClientOnly>
      <div id="loader-wrapper">
        <div id="loader"></div>

        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>

      <div id="content">
        <home-header />
        <home-statistics />
        <about-company />
        <company-vision />
        <company-mission />
        <partners-companies />
        <home-footer />
      </div>
    </ClientOnly>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      const bodyElement = document.querySelector("body");
      bodyElement.classList.add("loaded");
    }, 1000);
  },
};
</script>
