// @see: https://cz-git.qbenben.com/zh/guide
/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        // 文档的修改
        "docs",
        "style",
        // 重构
        "refactor",
        // 提高性能的修改
        "perf",
        // 添加或修改测试用例
        "test",
        "build",
        // 集成配置文件或者脚本的修改
        "ci",
        // 构建工具，依赖变更
        "chore",
        // 撤销某次提交，回滚
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  },
};
