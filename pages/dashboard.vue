<template>
  <h1 class="text-3xl">Dashboard</h1>
  I'm signed in!
  <div>
    <Icon name="🚀" />
    &nbsp;
    <Icon name="material-symbols:sports-basketball-outline" />
  </div>
  <NuxtLink to="/api/logout" external> Sign out </NuxtLink>
</template>
<script setup>
const auth = useAuth();
const { data } = await useFetch(`/api/users/${auth.user.id}`);
if (!data?.value?.id) {
  await useFetch("/api/users", {
    method: "POST",
    body: { id: auth.user.id, email: auth.user.email },
  });
}

definePageMeta({
  middleware: ["auth-logged-in"],
});
</script>
