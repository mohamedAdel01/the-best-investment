<template>
  <section
    class="company-vision d-flex flex-lg-nowrap flex-wrap align-items-start py-5 my-5 mx-md-5 mx-4"
  >
    <div class="mb-md-0 mb-5" data-aos="fade-right" data-aos-duration="1500">
      <img class="rounded" src="@/static/vision.png" alt="vision" />
    </div>
    <div class="mx-md-5 mx-4 px-lg-5 px-0" data-aos="fade-left" data-aos-duration="1500">
      <h2 class="text-secondary font-weight-bold mb-md-5 mb-4 pb-lg-4 pb-0">
        {{ $t("VISION") }}
      </h2>
      <p class="text-muted mb-md-5 mb-4">
        {{
          $t(
            "Our vision is to be the leading real estate service provider in the region and the preferred place of employment for real estate professionals."
          )
        }}
      </p>
      <p class="text-muted mb-md-5 mb-4">
        {{
          $t(
            "We consistently strive to develop collaborative partnerships, based on transparency and mutual trust, which serve to build enduring client relationships."
          )
        }}
      </p>
      <p class="text-muted mb-md-5 mb-4">
        {{
          $t(
            "As we expand, we’re committed to these principles, which have served our company and clients through the years."
          )
        }}
      </p>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
.company-vision {
  img {
    height: 550px;
  }
  h2 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }

  @media only screen and (max-width: 1000px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }

    img {
      width: 100%;
      height: auto;
    }

    h2,
    p {
      text-align: center;
    }
  }
}
</style>
