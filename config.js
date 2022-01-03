module.exports = {
  session: JSON.parse(process.env.SESSION),
  chat_id: process.env.CHAT_ID,
  category: process.env.CATEGORY || "all",
  delay: parseInt(process.env.DELAY) || 150
};
