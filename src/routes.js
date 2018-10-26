const router = require('express').Router();

const healthService = require('./service/health.service');

router.get('/health', (req, res, next) =>
  healthService.status(req.body).then(results => res.send(results), next)
);

module.exports = router;
