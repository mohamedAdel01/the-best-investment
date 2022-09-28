<template>
  <section class="bg-light py-5 my-5">
    <div
      class="d-flex align-items-start py-5 mx-5"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div class="mx-5 px-5">
        <h2 class="text-secondary font-weight-bold mb-5 pb-4" style="font-size: 40px">
          {{ $t("MISSION") }}
        </h2>
        <p class="col-11 px-0 text-muted mb-5" style="font-size: 20px">
          {{
            $t(
              "We’re dedicated to achieving our vision by creating an energetic, positive, results-driven work environment focused on the investment and development of long-term relationships. We measure our success by the results delivered to clients. Our ethics are built on our commitment to offer superior customer service, combining an entrepreneurial flair and bespoke service of a fast-growing organisation."
            )
          }}
        </p>
      </div>
      <div data-aos="fade-left" data-aos-duration="1500">
        <img
          class="rounded"
          style="height: 550px"
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

<style></style>
