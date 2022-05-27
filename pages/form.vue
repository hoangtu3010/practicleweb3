<template>
  <div class="row g-3">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Full Name</label>
      <input v-model="formData.name" type="text" class="form-control" id="inputEmail4"/>
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Date Of Birth</label>
      <input v-model="formData.dateOfBirth" type="date" class="form-control" id="inputPassword4" />
    </div>
    <div class="col-12 mt-3">
      <label for="inputAddress" class="form-label">Address</label>
      <input v-model="formData.address" type="text" class="form-control" id="inputAddress" />
    </div>
    <div class="col-12 mt-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Job History</label
      >
      <textarea
       v-model="formData.jobHistory"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="col-12 mt-3">
      <label for="exampleFormControlTextarea1" class="form-label">Skill</label>
      <textarea
       v-model="formData.skill"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="col-12 mt-5">
      <button @click="createCandidate" class="btn btn-primary">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        address: "",
        dateOfBirth: "",
        jobHistory: "",
        skill: "",
      },
    };
  },
  created() {
  },
  methods: {
    createCandidate() {
      if (
        this.formData.name &&
        this.formData.address &&
        this.formData.jobHistory &&
        this.formData.skill
      ) {
        this.$store
          .dispatch("practice/sCreateCandidate", this.formData)
          .then((res) => {
            this.$toast.success("Send successfully!");
            this.$router.push('/')
          });
      }
      else{
          this.$toast.error("Please complete all information")
      }
    },
  },
};
</script>

<style>
</style>