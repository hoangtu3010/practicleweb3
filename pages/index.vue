<template>
  <div>
    <h1 class="text-center">List Candidates</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Date Of Birth</th>
          <th scope="col">Job History</th>
          <th scope="col">Skill</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listCandidate" :key="item.id">
          <th scope="row">{{item.id}}</th>
          <td>{{item.name}}</td>
          <td>{{item.address}}</td>
          <td>{{item.dateOfBirth}}</td>
          <td>{{item.jobHistory}}</td>
          <td>{{item.skill}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      listCandidate: [],
    };
  },
  created() {
    this.getListCandidate();
  },
  methods: {
    getListCandidate() {
      this.$store.dispatch("practice/sGetListCandidates").then((res) => {
        this.listCandidate = res;
      });
    },
  },
};
</script>
