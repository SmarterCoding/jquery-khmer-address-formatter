# Security Policy

## Supported Versions

We currently provide security updates for the latest released version of:

| Version        | Supported |
| -------------- | --------- |
| Latest         | ✅         |
| Older versions | ❌         |

We recommend always using the latest version of `jquery-khmer-address-formatter`.

## Reporting a Vulnerability

If you discover a security vulnerability in `jquery-khmer-address-formatter`, please report it privately rather than opening a public GitHub issue.

Please include:

* A description of the vulnerability
* The affected version
* Steps to reproduce the issue
* A proof of concept, if available
* The potential security impact
* Any suggested fix, if available

### Report Privately

Please use the **GitHub Security Advisories** feature to report security vulnerabilities privately:

https://github.com/SmarterCoding/jquery-khmer-address-formatter/security/advisories/new

If private reporting is unavailable, please contact the project maintainer through the contact information listed in the repository.

## What Happens After Reporting

After receiving a vulnerability report, we will:

1. Review and verify the reported issue.
2. Determine the affected versions.
3. Assess the security impact.
4. Develop and test a fix.
5. Release a patched version when appropriate.
6. Publish a security advisory when necessary.

Please allow reasonable time for investigation and remediation before publicly disclosing the vulnerability.

## Security Best Practices

When using this package:

* Keep the package updated to the latest version.
* Run `npm audit` regularly.
* Use a lockfile such as `package-lock.json`.
* Do not install packages from untrusted sources.
* Review dependencies before introducing them into your project.
* Avoid exposing sensitive information in issue reports or logs.

## Automated Security Scanning

This project uses automated dependency security scanning through GitHub Actions.

Security checks may include:

* `npm audit`
* Dependency vulnerability scanning
* Automated dependency updates through Dependabot
* Automated testing

Security checks are performed on pull requests and scheduled runs.

## Scope

This security policy applies to:

`jquery-khmer-address-formatter`

Issues related to applications that use this package should be reported to the maintainers of those applications unless the issue is directly caused by this package.

## Responsible Disclosure

We appreciate responsible security research and coordinated disclosure.

Please do not publicly disclose a vulnerability before we have had a reasonable opportunity to investigate and address it.

Thank you for helping keep `jquery-khmer-address-formatter` and its users secure.
