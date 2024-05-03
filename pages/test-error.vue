<template>
  <h1>Test Page</h1>
</template>
<script setup>
throw createError({
  statusCode: 400,
  statusMessage: "Bad request. Try again later.",
});
</script>
