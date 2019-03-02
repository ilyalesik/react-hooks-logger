import { declare } from "@babel/helper-plugin-utils";
import t from "@babel/types";
import syntaxJSX from "@babel/plugin-syntax-jsx";

export default declare((api, options, dirname) => {
    api.assertVersion(7);

    return {
        name: "babel-plugin-react-overrides",
        inherits: syntaxJSX,

        visitor: {
            Program(programPath) {}
        }
    };
});
