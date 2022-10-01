<template>
  <section class="company-mission bg-light py-5 my-5">
    <div
      class="d-flex flex-lg-nowrap flex-wrap align-items-start py-5 mx-md-5 mx-4"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div class="order-md-0 order-1 mx-md-5 mx-4 px-lg-5 px-0">
        <h2 class="text-secondary font-weight-bold mb-md-5 mb-4 pb-lg-4 pb-0">
          {{ $t("MISSION") }}
        </h2>
        <p class="col-11 px-0 text-muted mb-5">
          {{
            $t(
              "We’re dedicated to achieving our vision by creating an energetic, positive, results-driven work environment focused on the investment and development of long-term relationships. We measure our success by the results delivered to clients. Our ethics are built on our commitment to offer superior customer service, combining an entrepreneurial flair and bespoke service of a fast-growing organisation."
            )
          }}
        </p>
      </div>
      <div class="order-md-1 order-0 mb-md-0 mb-5" data-aos="fade-left" data-aos-duration="1500">
        <img
          class="rounded"
          src="@/static/mission.png"
          alt="mission"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.company-mission {
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
