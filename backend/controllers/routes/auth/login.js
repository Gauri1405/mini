const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findUnique({ where: { email } });

  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ userId: user.id, role: user.role }, 'secretKey', { expiresIn: '1h' });
  res.json({ token });
});
