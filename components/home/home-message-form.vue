<template>
  <form class="bg-white p-4 mx-5" style="border-radius: 40px" @submit.prevent>
    <h2
      class="mt-3 mb-4 text-center text-secondary font-weight-bold"
      style="font-size: 20px"
    >
      {{ $t("SEND MESSAGE NOW") }}
    </h2>
    <div>
      <b-form-group class="mb-4">
        <b-form-input
          dir="auto"
          type="text"
          :placeholder="$t('Name')"
          v-model="form.name"
          class="px-4 bg-light font-weight-bold border-0"
          style="border-radius: 10px; height: 50px"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="mb-4">
        <b-form-input
          dir="auto"
          type="text"
          :placeholder="$t('Mobile')"
          v-model="form.name"
          class="px-4 bg-light font-weight-bold border-0"
          style="border-radius: 10px; height: 50px"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="mb-4">
        <b-form-input
          dir="auto"
          type="text"
          :placeholder="$t('E-mail')"
          v-model="form.name"
          class="px-4 bg-light font-weight-bold border-0"
          style="border-radius: 10px; height: 50px"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="mb-4">
        <b-form-textarea
          class="py-3 px-4 border-0 bg-light font-weight-bold"
          style="border-radius: 15px"
          :placeholder="$t('Message')"
          rows="5"
        ></b-form-textarea>
      </b-form-group>
    </div>

    <div class="text-center">
      <button
        class="btn btn-primary font-weight-bold px-5"
        style="height: 50px; font-size: 16px; border-radius: 10px"
      >
        {{ $t("GET IN TOUCH") }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
};
</script>
