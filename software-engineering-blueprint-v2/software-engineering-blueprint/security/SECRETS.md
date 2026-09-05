# Secrets

Never commit real credentials.

Use `.env.example` with placeholders only.
Prefer managed secret storage in production.
Restrict scopes and privileges.
Document rotation and revocation.
Treat leaked secrets as compromised and rotate them; deleting the Git line alone is insufficient.
