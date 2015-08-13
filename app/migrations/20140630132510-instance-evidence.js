var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.runSql("ALTER TABLE `badgeInstances` "
          + "  ADD `evidenceUrl` VARCHAR(255) "
          + "  ADD UNIQUE KEY     `email_and_badge_and_ev` (`email`, `badgeId`, 'evidenceUrl')"
          , callback);
};

exports.down = function(db, callback) {
  db.runSql("ALTER TABLE `badgeInstances` "
          + "  DROP COLUMN `evidenceUrl` "
          , callback);
};
