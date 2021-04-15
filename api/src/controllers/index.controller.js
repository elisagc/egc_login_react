const users = require("../data/users.json");

const getUsers = async (req, res) => {
  const {
    user: { email, password },
  } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  const response = user || null;
  res.status(200).json(response);
};

module.exports = {
  getUsers,
};
