<template>
  <div class="contaiter">
    <h2>Персональные данные</h2>
    <div v-if="user.name" class="data-user">
      <p>
        <strong> {{ user.name }}, </strong>
      </p>
      <p>
        <strong style="margin-left: 5px"> {{ user.age }} лет</strong>
      </p>
    </div>

    <div v-if="children.length > 0">
      <h2>Дети</h2>
      <div v-for="(child, index) in children" :key="index" class="data-child">
        <p>
          <strong> {{ child.name }}, </strong>
        </p>
        <p>
          <strong> {{ child.age }} лет</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user", "children"]),
  },
};
</script>

<style scoped>
.contaiter {
  margin-left: 300px;
  font-size: 16px;
}

.data-user,
.data-child {
  display: flex;
  align-items: center;

  max-width: 200px;
  height: 44px;
}

.data-child p {
  margin: 0 0 10px 10px;
}

.data-child {
  background-color: #ccc;
}
  @media (max-width: 768px) {
  .contaiter {
    margin-left: 100px;
  }

  .data-user,
  .data-child {
    max-width: 150px;
  }
}
</style>
