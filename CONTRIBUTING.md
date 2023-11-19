## Contributing to Pol-ui

# Reporting Bugs

When reporting an issue, please list the version of Pol-ui you are using and any relevant information about your application (Rails version, database type and version, etc). Please describe as specifically as you can what behavior you are seeing (eg: an error message? a null return value?).

Please DO NOT use GitHub issues to ask questions about how to use Pol-ui. Sites like [StackOverflow](http://www.stackoverflow.com/) are a better forum for such discussions.

# Making Changes

Changes are welcome via Github pull requests. If you are new to the project and looking for a way to get involved, try picking up an issue with a "beginner-task" label. Hints about what needs to be done are usually provided.

For all contributions, please respect the following guidelines:

- Each pull request should implement ONE feature or bugfix. If you want to add or fix more than one thing, submit more than one pull request.
- Do not commit changes to files that are irrelevant to your feature or bugfix (eg: `.gitignore`).
- Do not add dependencies on other gems.
- Do not add unnecessary `require` statements which could cause LoadErrors on certain systems.
- Remember: Pol-ui needs to run outside of Rails. Don't assume things like ActiveSupport are available.
- Be willing to accept criticism and work on improving your code; Pol-ui is used by thousands of developers and care must be taken not to introduce bugs.
- Be aware that the pull request review process is not immediate, and is generally proportional to the size of the pull request.
- If your pull request is merged, please do not ask for an immediate release of the gem. There are many factors contributing to when releases occur (remember that they affect thousands of apps with Pol-ui in their Gemfiles). If necessary, please install from the Github source until the next official release.

Copyright :copyright: 2023 Pol Gubau Amoeres, released under the MIT license.
