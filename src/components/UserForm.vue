<template>
  <div class="main">
    <form @submit.prevent="saveUser">
      <div class="container-top">
        <h2>Персональные данные</h2>
        <div class="input-container">
          <input v-model="user.name" type="text" id="name" required />
          <label for="fullName">Имя</label>
        </div>
        <div class="input-container">
          <input v-model.number="user.age" type="number" id="age" required />
          <label for="age">Возраст</label>
        </div>
      </div>
      <div class="middle">
        <h2>Дети (макс. 5)</h2>
        <button v-if="children.length < 5" @click="addChild" class="add-button">
          + Добавить ребенка
        </button>
      </div>
      <div v-for="(child, index) in children" :key="index" class="child-form">
        <div class="input-container child">
          <input v-model="child.name" type="text" required />
          <label>Имя</label>
        </div>
        <div class="input-container child">
          <input v-model.number="child.age" type="number" required />
          <label>Возраст</label>
        </div>
        <button @click="removeChild(index)" class="delete-button">
          Удалить
        </button>
      </div>

      <button class="submit" type="submit">Сохранить</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["user", "children"]),
  },
  methods: {
    ...mapMutations(["addChild", "removeChild"]),

    saveUser() {
      this.$router.push("/preview");
      console.log(
        "Информация о пользователе:",
        this.user,
        "Дети:",
        this.children
      );
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-container {
  position: relative;
  margin-bottom: 20px;
}

.input-container input {
  width: 616px;
  height: 40px;
  border: 1px solid #ccc;
  padding: 16px 0 0 15px;
}

.child-form {
  display: flex;
  justify-content: space-between;
}
.child input {
  width: 260px;
  height: 40px;
}
.input-container label {
  position: absolute;
  top: 8px;
  left: 10px;
  color: #999;
  pointer-events: none;
  transition: top 0.3s, font-size 0.3s;
}

.input-container input:focus + label,
.input-container input:not(:placeholder-shown) + label {
  top: 10px;
  font-size: 12px;
  background-color: white;
  padding: 0 5px;
}

.delete-button {
  height: 56px;
  background-color: #fff;
  color: #01a7fd;
  border: none;
  cursor: pointer;
}

.add-button {
  width: 200px;
  height: 44px;
  border-radius: 20px;
  border: 2px solid #01a7fd;
  background-color: #fff;
  color: #01a7fd;
  cursor: pointer;
  margin-bottom: 10px;
}

.middle {
  display: flex;
  justify-content: space-between;
}

.submit {
  width: 100px;
  height: 44px;
  border-radius: 20px;
  border: 2px solid #01a7fd;
  background-color: #01a7fd;
  color: #fff;
  cursor: pointer;
}

  
@media (max-width: 768px) {
  .container-top {
    max-width: 100%;
  }

  .input-container input {
    width: 100%;
    max-width: none;
  }
  .child input {
    max-width: 150px;
  }
}
</style>
