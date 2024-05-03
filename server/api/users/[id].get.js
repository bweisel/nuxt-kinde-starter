export default defineEventHandler(async (event) => {
  const userId = event.context.params.id;
  return await getUserById(userId);
});
