<template>
  <section
    class="about-company mt-5 pt-4 text-center overflow-hidden"
    data-aos="fade-down"
    data-aos-duration="1500"
  >
    <h2 class="text-primary mb-md-5 mb-4 font-weight-bold">
      {{ $t("ABOUT COMPANY") }}
    </h2>

    <div class="col-md-6 col-11 mx-auto px-0 mb-5 pb-5">
      <p class="text-black-50 mb-4" >
        {{
          $t(
            "The best investment is real estate consultancy in Egypt that provides its clients with comprehensive information and expert advice."
          )
        }}
      </p>
      <p class="text-black-50 mb-4" >
        {{
          $t(
            "Guide each client through the real estate experience with patience and a continuous and open line of communication."
          )
        }}
      </p>
      <p class="text-black-50" >
        {{
          $t(
            "To provide accurate and up-to-date information, skillful analysis and sound real estate advice."
          )
        }}
      </p>
    </div>

    <div class="layer"></div>
  </section>
</template>

<script></script>

<style lang="scss">
.about-company {
  h2 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }

  .layer {
    background-image: url("@/static/Layer.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }

}
</style>
