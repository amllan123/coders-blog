module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1cd760aeee153401e2059f14e29c9840'),
  },
});
