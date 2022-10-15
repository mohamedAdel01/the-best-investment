<template>
  <section class="parteners-companies my-5 py-4 text-center overflow-hidden">
    <h2
      class="text-primary mb-5 pb-5 font-weight-bold"
      style="font-size: 40px"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      {{ $t("SUCCESS PARTNERS") }}
    </h2>

    <div class="d-md-block d-none">
      <div class="d-flex align-items-center mb-5">
        <div
          class="col-3 px-0"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <img src="@/static/1.jpg" style="height: 100px" alt="company" />
        </div>
        <div
          class="col-3 px-0"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="400"
        >
          <img src="@/static/2.jpg" style="height: 100px" alt="company" />
        </div>
        <div
          class="col-3 px-0"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          <img src="@/static/3.jpeg" style="height: 100px" alt="company" />
        </div>
        <div
          class="col-3 px-0"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="800"
        >
          <img src="@/static/4.jpg" style="height: 100px" alt="company" />
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div
          class="col-3 px-0"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          <img src="@/static/5.png" style="height: 100px" alt="company" />
        </div>
        <div
          class="col-3 px-0"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="1200"
        >
          <img src="@/static/6.jpg" style="height: 100px" alt="company" />
        </div>
        <div
          class="col-3 px-0"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="1400"
        >
          <img src="@/static/7.jpg" style="height: 100px" alt="company" />
        </div>
        <div
          class="col-3 px-0"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="1600"
        >
          <img src="@/static/8.png" style="height: 100px" alt="company" />
        </div>
      </div>
    </div>

    <VueSlickCarousel class="d-md-none d-block" v-bind="settings">
      <div class="text-center" v-for="(img, i) in imgs" :key="i">
        <img class="carousel-parteners d-inline" :src="require(`@/static/${img}`)" />
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imgs: ["1.jpg", "2.jpg", "3.jpeg", "4.jpg", "5.png", "6.jpg", "7.jpg", "8.png"],
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.parteners-companies {
  .carousel-parteners {
    width: 80% !important;
    height: auto !important;
  }
}
</style>
