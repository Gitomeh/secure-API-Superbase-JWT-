// Reusable authentication middleware
// Verifies JWT tokens with Supabase and attaches user to request
const supabase = require('../config/supabase');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access token required' });
  }

  const token = authHeader.substring(7);

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    req.user = {
      id: data.user.id,
      email: data.user.email,
      created_at: data.user.created_at,
    };

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;