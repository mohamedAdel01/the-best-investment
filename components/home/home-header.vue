<template>
  <header class="home-header px-lg-5 px-md-4 px-3">
    <div
      class="d-flex justify-content-between align-items-center mb-5 py-4"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-delay="1200"
    >
      <div>
        <inline-svg class="logo" :src="require('@/static/logo.svg')"></inline-svg>
      </div>

      <!-- <ul
        class="d-flex justify-content-between p-0 text-white mx-n4"
        style="font-size: 16px"
      >
        <li class="px-4">{{ $t("Home") }}</li>
        <li class="px-4">{{ $t("About Us") }}</li>
        <li class="px-4">{{ $t("Partners") }}</li>
        <li class="px-4">{{ $t("Contact Us") }}</li>
      </ul> -->
    </div>

    <div class="d-flex flex-wrap justify-content-between align-items-end pb-5">
      <div
        class="col-lg-5 col-md-6 col-12 px-0 mb-5"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="1200"
      >
        <div class="mb-5 pb-lg-5 pb-0">
          <h1 class="mb-md-5 mb-4 text-primary font-weight-bold">
            {{ $t("THE BEST WAY TO FIND YOUR HOME") }}
          </h1>
          <a
            class="btn btn-primary text-secondary rounded-pill px-5 font-weight-bold"
            style="font-size: 16px; height: 50px; line-height: 38px"
            target="_blank"
            :href="`https://api.whatsapp.com/send?phone=%2B2${'01124458565'}`"
          >
            {{ $t("Contact Us") }}
          </a>
        </div>
        <div class="d-flex align-items-center">
          <div>
            <a target="_blank" href="https://www.facebook.com/thebestinvestmenttbi/">
              <inline-svg :src="require('@/static/facebook.svg')"></inline-svg>
            </a>
          </div>
          <div class="mx-3">
            <a
              target="_blank"
              href="https://www.instagram.com/thebestinvestment91/?igshid=NmNmNjAwNzg%3D"
            >
              <inline-svg :src="require('@/static/insta.svg')"></inline-svg>
            </a>
          </div>
        </div>
      </div>

      <div
        v-if="false"
        class="col-xl-4 col-lg-5 col-md-6 col-12 px-0"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="1200"
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

<style lang="scss">
.home-header {
  h1 {
    font-size: 60px;
  }
  .logo {
    height: 80px;
  }
  @media only screen and (max-width: 1000px) {
    h1 {
      font-size: 40px;
    }
    .logo {
      height: 60px;
    }
  }
  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 25px;
    }
    .logo {
      height: 50px;
    }
  }
}
</style>
