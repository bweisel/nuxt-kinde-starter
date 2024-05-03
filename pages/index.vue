<template>
  <h1 class="text-3xl font-bold">Home</h1>
  <div v-if="$auth.loggedIn">
    I'm signed in!
    <NuxtLink class="underline" to="dashboard"> Dashboard </NuxtLink>
    <NuxtLink class="underline" to="/api/logout" external> Sign out </NuxtLink>
  </div>
  <div v-else>
    <NuxtLink class="underline" to="/api/login" external>Sign in</NuxtLink>
    &nbsp;
    <NuxtLink class="underline" to="/api/register" external>Sign up</NuxtLink>
  </div>
</template>
