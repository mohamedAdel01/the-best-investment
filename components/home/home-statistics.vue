<template>
  <section class="d-flex justify-content-center bg-light py-5">
    <div class="col-3 px-0 text-center" data-aos="zoom-in" data-aos-duration="1500">
      <number
        v-if="showCounter"
        class="text-black-50 font-weight-bold"
        style="font-size: 50px"
        :from="1"
        :to="200"
        :duration="2"
        :delay="0.3"
        easing="Power1.easeOut"
      />

      <p class="text-secondary font-weight-bold" style="font-size: 22px">
        {{ $t("Contract") }}
      </p>
    </div>
    <div class="col-3 px-0 text-center" data-aos="zoom-in" data-aos-duration="1500">
      <number
        v-if="showCounter"
        class="text-black-50 font-weight-bold"
        style="font-size: 50px"
        :from="1"
        :to="200"
        :duration="2"
        :delay="0.3"
        easing="Power1.easeOut"
      />

      <p class="text-secondary font-weight-bold" style="font-size: 22px">
        {{ $t("Clients") }}
      </p>
    </div>
    <div class="col-3 px-0 text-center" data-aos="zoom-in" data-aos-duration="1500">
      <number
        v-if="showCounter"
        class="text-black-50 font-weight-bold"
        style="font-size: 50px"
        :from="1"
        :to="200"
        :duration="2"
        :delay="0.3"
        easing="Power1.easeOut"
      />

      <p class="text-secondary font-weight-bold" style="font-size: 22px">
        {{ $t("Sales") }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showCounter: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 1) this.showCounter = true;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
