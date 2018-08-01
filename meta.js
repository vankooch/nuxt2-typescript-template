var completeMessage = "To get started:\n\n"
completeMessage += "{{#inPlace}}"
completeMessage += "cd {{destDirName}}\n"
completeMessage += "{{/inPlace}}"
completeMessage += "yarn install \n"
completeMessage += "# Development server \n"
completeMessage += "yarn dev \n"
completeMessage += "# Generate \n"
completeMessage += "yarn generate \n"
completeMessage += "# Build \n"
completeMessage += "yarn build \n"
completeMessage += "yarn start \n"

module.exports = {
    helpers: {
      raw: function(options) {
        return options.fn(this)
      }
    },
    prompts: {
      name: {
        type: "string",
        required: true,
        message: "Project name"
      },
      description: {
        type: "string",
        required: false,
        message: "Project description",
        default: "Nuxt.js TypeScript project"
      },
      author: {
        type: "string",
        message: "Author"
      }
    },
    completeMessage: completeMessage,
  }