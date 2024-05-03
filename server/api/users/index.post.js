export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id, email } = body;
  await createUser({ id, email });
  return { id: id };
});
