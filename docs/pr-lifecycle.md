# Pull request lifecycle

The `Close PRs older than three months` GitHub Actions workflow runs daily at
02:17 UTC (10:17 China Standard Time), and can also be started manually from the
Actions tab. GitHub may delay scheduled runs.

An open PR, including a draft, is closed when its creation time plus three
calendar months is strictly earlier than the run time. Month-end dates are
clamped to the final day of the target month; calculations use UTC. Comments and
new commits do not reset this deadline.

The workflow rechecks each candidate before closing it. It does not merge PRs,
delete branches, change issues, or post comments. Results appear in the workflow
summary. Failed requests have bounded retries; later runs pick up remaining PRs.

To stop automatic closure, disable this workflow in GitHub Actions. Reopening an
expired PR without disabling or changing the policy will make it eligible again.
