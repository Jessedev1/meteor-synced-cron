Package.describe({
  summary: "Define and run scheduled jobs across multiple servers.",
  version: "3.0.0",
  name: "jessedev:synced-cron",
  git: "https://github.com/jessedev/meteor-synced-cron.git"
});

Npm.depends({'@breejs/later': "4.2.0"});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@3.0');
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.addFiles(['synced-cron-server.js'], "server");
  api.export('SyncedCron', 'server');
});

Package.onTest(function (api) {
  api.use(['check', 'mongo'], 'server');
  api.use(['tinytest', 'underscore', 'logging']);
  api.addFiles(['synced-cron-server.js', 'synced-cron-tests.js'], ['server']);
});
