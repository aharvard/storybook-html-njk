import { storiesOf } from "@storybook/html";

storiesOf("Demo", module)
  .add("heading", () => "<h1>Hello World</h1>")
  .add("nunjucks index", () => {
    require("../src/index.njk").render({});
  })
  .add("nunjucks button", () => {
    require("../src/components.njk").render({});
  });
