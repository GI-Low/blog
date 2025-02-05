<p align="center">
  <img style="width: 25%" src="https://github.com/user-attachments/assets/a9ef43a6-51bf-4526-8295-a6c3ca11c016" />
  <h1 align="center">GitHub Lowlands Community</h1>
</p>

## Blog Posts

## Developing GitHub Chat Instruction Files

### Key Components

A GitHub Chat instruction file includes the following key components:

* **Name**: The name of the instruction file, which helps identify its purpose.
* **About**: A brief description of what the instruction file is about.
* **Title**: A default title for issues or pull requests created using this instruction file.
* **Labels**: Default labels to be applied to issues or pull requests created using this instruction file.
* **Assignees**: Default assignees for issues or pull requests created using this instruction file.
* **Body**: The main content of the instruction file, which can include various sections and fields for users to fill out.

### Creating a New GitHub Chat Instruction File

To create a new GitHub Chat instruction file, follow these steps:

1. Create a new file in the `.github/ISSUE_TEMPLATE` directory.
2. Name the file appropriately to reflect its purpose, for example, `new-instruction.md`.
3. Add the following key components to the file:
   * **Name**: The name of the instruction file, which helps identify its purpose.
   * **About**: A brief description of what the instruction file is about.
   * **Title**: A default title for issues or pull requests created using this instruction file.
   * **Labels**: Default labels to be applied to issues or pull requests created using this instruction file.
   * **Assignees**: Default assignees for issues or pull requests created using this instruction file.
   * **Body**: The main content of the instruction file, which can include various sections and fields for users to fill out.

You can refer to the existing `custom.md` (`.github/ISSUE_TEMPLATE/custom.md`) file for an example of how to structure your new instruction file.

### Best Practices for Naming Instruction Files

Here are some best practices for naming instruction files:

* **Be descriptive**: Use a name that clearly describes the purpose of the instruction file. This helps users understand what the file is for at a glance.
* **Use hyphens**: Separate words with hyphens to improve readability. For example, `new-instruction.md` is easier to read than `newinstruction.md`.
* **Keep it concise**: While being descriptive, try to keep the name as short as possible. Long names can be cumbersome to work with.
* **Follow existing conventions**: If there are existing instruction files in the repository, follow the same naming conventions to maintain consistency. For example, the existing file `.github/ISSUE_TEMPLATE/custom.md` uses a concise and descriptive name.
* **Avoid special characters**: Stick to alphanumeric characters and hyphens. Avoid using special characters, spaces, or underscores in the file name.
* **Use lowercase**: Use lowercase letters for the file name to avoid any potential issues with case sensitivity in different operating systems.

### Testing an Instruction File

To test a GitHub Chat instruction file, follow these steps:

1. Ensure the instruction file is located in the `.github/ISSUE_TEMPLATE` directory.
2. Verify that the instruction file contains the key components: `name`, `about`, `title`, `labels`, `assignees`, and `body`.
3. Commit and push the instruction file to the repository.
4. Navigate to the repository on GitHub and go to the "Issues" or "Pull requests" tab, depending on the type of instruction file.
5. Click on the "New issue" or "New pull request" button.
6. Check if the new instruction file appears as an option in the template selection.
7. Select the instruction file and verify that the fields and sections are displayed correctly.
8. Fill out the fields and submit the issue or pull request to ensure the instruction file works as expected.
