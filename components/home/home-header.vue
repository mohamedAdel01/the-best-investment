<template>
  <header class="px-5">
    <div
      class="d-flex justify-content-between align-items-center mb-5 py-4"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-delay="2200"
    >
      <div>
        <inline-svg height="80px" :src="require('@/static/logo.svg')"></inline-svg>
      </div>

      <ul
        class="d-flex justify-content-between p-0 text-white mx-n4"
        style="font-size: 16px"
      >
        <li class="px-4">{{ $t("Home") }}</li>
        <li class="px-4">{{ $t("About Us") }}</li>
        <li class="px-4">{{ $t("Partners") }}</li>
        <li class="px-4">{{ $t("Contact Us") }}</li>
      </ul>
    </div>

    <div class="d-flex justify-content-between align-items-end pb-5">
      <div
        class="col-5 px-0 mb-5"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="2200"
      >
        <div class="mb-5 pb-5">
          <h1 class="mb-5 text-primary font-weight-bold" style="font-size: 60px">
            {{ $t("THE BEST WAY TO FIND YOUR HOME") }}
          </h1>
          <button
            class="btn btn-primary text-secondary rounded-pill px-5 font-weight-bold"
            style="font-size: 16px; height: 50px"
          >
            {{ $t("Contact Us") }}
          </button>
        </div>
        <div class="d-flex align-items-center">
          <div>
            <inline-svg :src="require('@/static/facebook.svg')"></inline-svg>
          </div>
          <div class="mx-3">
            <inline-svg :src="require('@/static/insta.svg')"></inline-svg>
          </div>
        </div>
      </div>

      <div
        class="col-4 px-0"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="2200"
      >
        <home-message-form />
      </div>
    </div>
  </header>
</template>

<script></script>
<style lang="scss">
header {
  background-image: url("@/static/cover.png"); /* fallback for old browsers */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
