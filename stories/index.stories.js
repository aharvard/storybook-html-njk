import { storiesOf } from "@storybook/html";

import index from "../src/index.njk";
import component from "../src/components.njk";

storiesOf("Demo", module)
  .add("heading", () => "<h1>Hello World</h1>")
  .add("nunjucks index", () => index())
  .add("nunjucks button", () => {
    component.myButton({});
  });
