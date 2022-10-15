<template>
  <footer class="p-5">
    <div class="d-flex justify-content-between align-items-start pt-5">
      <div>
        <h2 class="text-primary mb-5" style="font-size: 30px">
          {{ $t("Get in touch") }}
        </h2>

        <div class="d-flex flex-wrap align-items-center">
          <div class="col-md-3 col-12 d-flex align-items-center mb-4 px-4">
            <div>
              <inline-svg height="40px" :src="require('@/static/phone.svg')"></inline-svg>
            </div>
            <a
              class="mx-3 mb-0 text-white"
              style="font-18"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=0201124458565"
            >
              01124458565</a
            >
          </div>

          <div class="col-md-3 col-12 d-flex align-items-center mb-4 px-4">
            <div>
              <inline-svg height="40px" :src="require('@/static/phone.svg')"></inline-svg>
            </div>
            <a
              class="mx-3 mb-0 text-white"
              style="font-18"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=0201114466177"
            >
              01114466177</a
            >
          </div>

          <div class="col-md-3 col-12 d-flex align-items-center mb-4 px-4">
            <div>
              <inline-svg height="40px" :src="require('@/static/email.svg')"></inline-svg>
            </div>
            <p class="mx-3 mb-0 text-white" style="font-18">
              contact@thebestinvestment.info
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="col-3 px-0">
        <b-form-group class="mb-4">
          <b-form-input
            dir="auto"
            type="text"
            :placeholder="$t('Your Email')"
            class="px-4 bg-white text-muted font-weight-bold border-0 text-center"
            style="border-radius: 30px; height: 60px; font-size: 16px"
          ></b-form-input>
        </b-form-group>

        <button
          class="btn btn-block btn-primary text-secondary font-weight-bold"
          style="border-radius: 30px; height: 60px; font-size: 16px"
        >
          {{ $t("Subscribe") }}
        </button>
      </div> -->
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  background-image: url("@/static/footer.png");
  background-repeat: no-repeat;
}
</style>
