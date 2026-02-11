module.exports = {
  title: 'てて還り リプレイログ',
  author: 'ほし & 生はむ',
  language: 'ja',
  size: 'A5',
  theme: 'src/style.css', // ほしさんのCSSを指定
  entry: [
    'src/log_data.md', // 自動生成されるログファイルを指定
  ],
  output: [
    'dist/output.pdf',
  ],
}
