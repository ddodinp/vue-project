
// path : NodeJs에서 파일 및 디렉토리 경로 작업을 위한 전역 모듈
const path = require('path')

module.exports = {
  // .js, .vue 확장자 없이도 잘 실행되게 설정
  resolve: {
    extensions: ['.js', '.vue']
  },
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry:'./src/main.js',
  // 결과물(번들)을 변환하는 설정
  output: {
    // 주석은 기본값, `__dirname`은 현재 파일의 위치를 알려주는 NodeJS 전역 변수
    //path: path.resolve(__dirname,"dist"), // resolve 1,2 번째 인수 경로를 합쳐주는
    //filename:"main.js",
    clean: true // 기존의 불필요한 파일을 제거하고 새로 빌드된 파일만 보일 수 있게 도움
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}