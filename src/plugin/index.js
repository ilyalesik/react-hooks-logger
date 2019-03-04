import { declare } from "@babel/helper-plugin-utils";
const t = require("@babel/types");
import syntaxJSX from "@babel/plugin-syntax-jsx";

const PLUGIN_DIRECTIVE = /react\s+hooks\s+logger\s+enabled/;

export default declare((api, options, dirname) => {
    api.assertVersion(7);

    let directiveFound = false;

    return {
        name: "react-hooks-logger",
        inherits: syntaxJSX,

        visitor: {
            Program: (path, state) => {
                const comments = path.container.comments;

                if (comments) {
                    for (const comment of comments) {
                        if (PLUGIN_DIRECTIVE.test(comment.value)) {
                            directiveFound = true;
                        }
                    }
                }

                if (!directiveFound) {
                    return;
                }

                const packageName = (state && state.opts && state.opts.packageName) || "react-hooks-logger";

                const body = path.node.body;
                const importDeclaration = t.importDeclaration(
                    [t.importSpecifier(t.identifier("useLoggedState"), t.identifier("useLoggedState"))],
                    t.stringLiteral(packageName)
                );
                body.unshift(importDeclaration);
            },
            CallExpression(path) {
                if (!directiveFound) {
                    return;
                }

                if (path.node.callee.name === "useState") {
                    path.node.callee.name = "useLoggedState";
                }
            }
        }
    };
});
