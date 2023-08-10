<template>
  <header>
    <nav>
      <div>
        <img src="logo.png" alt="logo" />
      </div>
      <ul class="nav-list">
        <li><router-link to="/">Форма</router-link></li>
        <li><router-link to="/preview">Превью</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-list {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: -100px;
}

header a {
  text-decoration: none;
  color: #adadad;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 400;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #adadad;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

  
@media (max-width: 768px) {
  header {
    height: 3.5rem;
  }

  .nav-list {
    margin-left: -20px;
  }

  header a {
    padding: 0.5rem 1rem;
  }
}
</style>
