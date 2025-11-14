const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Use Prisma's model for User

router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    data: { name, email, password: hashedPassword, role }
  });
  res.json(user);
});
