<template>
  <section class="d-flex align-items-start py-5 my-5 mx-5">
    <div data-aos="fade-right" data-aos-duration="1500">
      <img class="rounded" style="height: 550px" src="@/static/vision.png" alt="vision" />
    </div>
    <div class="mx-5 px-5" data-aos="fade-left" data-aos-duration="1500">
      <h2 class="text-secondary font-weight-bold mb-5 pb-4" style="font-size: 40px">
        {{ $t("VISION") }}
      </h2>
      <p class="text-muted mb-5" style="font-size: 20px">
        {{
          $t(
            "Our vision is to be the leading real estate service provider in the region and the preferred place of employment for real estate professionals."
          )
        }}
      </p>
      <p class="text-muted mb-5" style="font-size: 20px">
        {{
          $t(
            "We consistently strive to develop collaborative partnerships, based on transparency and mutual trust, which serve to build enduring client relationships."
          )
        }}
      </p>
      <p class="text-muted mb-5" style="font-size: 20px">
        {{
          $t(
            "As we expand, we’re committed to these principles, which have served our company and clients through the years."
          )
        }}
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>
