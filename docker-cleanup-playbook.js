#!/usr/bin/env node
// Docker Cleanup Playbook - generates a cleanup plan, never executes it.
const lines = [
  '# Docker cleanup plan (review before running)',
  'docker container prune --filter "until=168h"',
  'docker image prune -a --filter "until=336h"',
  'docker volume ls -qf dangling=true',
  'docker builder prune --filter "until=168h"'
];
if (process.argv.includes('--help')) {
  console.log('Usage: node docker-cleanup.js   (prints a plan; nothing is executed)');
  process.exit(0);
}
console.log(lines.join('\n'));
