<script setup>
import { ref } from "vue";
const posts = ref(null);
const url = "https://jsonplaceholder.typicode.com/"
fetch(url + "posts")
  .then((response) => response.json())
  .then((data) => (posts.value = data));
</script>

ЗДЕСЬ ЕЩЕ НИЧЕГО НЕ СДЕЛАНО