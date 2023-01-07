RESOURSES:
* https://www.youtube.com/playlist?list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV
<hr>
1. В директории проекта инициализируем проект:
        
        $ npm init 

    Произойдет настройка файла <b>package.json</b>
    необходимо указать entry point:

        src/index.js

<hr>
    Целиком файл <b>package.json</b> выглядит следующим образом:

        {
        "name": "webpack_e_12",
        "version": "1.0.0",
        "description": "learning webpack",
        "main": "src/index.js",
        "devDependencies": {
            "html-webpack-plugin": "^5.5.0",
            "pack": "^2.2.0",
            "path": "^0.12.7",
            "webpack": "^5.75.0",
            "webpack-cli": "^5.0.1",
            "webpack-dev-server": "^4.11.1",
            "webpack.config.js": "^0.0.0"
        },
        "scripts": {
            "dev": "webpack-dev-server --open --mode development",
            "build": "webpack --mode production"
        },
        "author": "Bulat",
        "license": "MIT"
        }

<hr>
    Здесь есть поле <b>scripts</b>, в которое можно прописать скрипты для запуска сервера через консоль командой, например:

        $ npm run dev

<hr>
2. Теперь необходимо устновить:

* webpack
* webpack-cli 
* webpack-dev-server 
* path

    
        $ npm install webpack webpack-cli webpack-dev-server path --save-dev

    <i>Webpack-dev-server предоставляет простой веб-сервер и возможность использовать мгновенную перезагрузку.</i>


<hr>
3. Настройки сервера нужно производить в файле <b>webpack.config.js</b>, где полю <b>mode</b> установим значение <b>development</b>. Так мы обозначим, что эта конфигурация будет использована только в режиме разработки.

        // подключаем пакет path, который устанавливали ранее - в пункте 2.
        const path = require('path')

        module.exports = {
            mode: 'development', // режим разработчика
            entry: {
                app: './src/index.js', // путь ко входному файлу
            },
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: '[name].js', // название файла будет взято из entry, т.е. будет app.js
                publicPath: './dist'
            },
            devServer: {
                static: { directory: path.join(__dirname) },
                client: { overlay: true },
                liveReload: true,
                hot: true,
            },
            stats: {
                children: false // скрыть информацию в логах консоли о дочерних элементах.
            },
            devtool: 'inline-source-map', // для отслеживание источника ошибок
        }
<hr>
где:   
    
-  точка входа:

        entry: {
            app: './src/index.js', // путь ко входному файлу
        },

    <i><b>app</i></b> - название файла точки входа, которая будет генерироваться автоматически в памяти сервера.

- точка выхода:

        output: {
            // путь к директории, где нужно сохранять временный файл
            path: path.resolve(__dirname, 'dist'),
            
            // путь должен быть публичным
            publicPath: './dist'
            
            // название временного файла
            filename: '[name].js',
        },

<i><b>filename: '[name].js'</i></b>, где name - это название файла из entry, т.е. название файла будет: <i><b>app.js</i></b>

3.1. Создадим файл <b>./src/index.js</b>, в котором укажем import из другого файла js:

        import './js/common.js'

3.2 Создадим файл <b>./src/js/common.js</b>, в котором напишем основной код. Например:

    function job() {
        document.open()
        document.write('Hello, MAN \n')
        document.close()
    }
    setTimeout(job, 1500)

    const sum = (a, b) => (a+b)
    console.log(sum(3,3))

<hr>
4. Установим mock-server

        $ npm install -g json-server

* создадим файл <b>db.json</b> с данными в корне проекта:

        {
            "posts": [
                {
                    "id": 1,
                    "title": "json-server",
                    "author": "typicode"
                }
            ],
            "comments": [
                {
                    "id": 1,
                    "body": "some comment",
                    "postId": 1
                }
            ],
            "profile": {
                "name": "typicode"
            }
        }

* запустим json-server


        json-server --watch db.json

    <i>флаг <b>--watch</b> означает, что сервер будет обновлять данные при изменениях в файле</i>

<hr>
5. Hooks

Используем husky

* Install

        $ npm install husky --save-dev

* Usage

  Edit package.json > prepare script and run it once:

        $ npm pkg set scripts.prepare="husky install"
        $ npm run prepare

* Add a hook:

        $ npx husky add .husky/pre-commit "npm test"
        $ git add .husky/pre-commit

* Make a commit:

        $ git commit -m "Keep calm and commit"

Так как хук сделан для пред-коммитной стадии (pre-commit запускается первым и используется для проверки данных перед созданием коммита), то каждый раз перед коммитом будет запускаться скрипт, добавленный в папку .husky

        #!/usr/bin/env sh
        . "$(dirname -- "$0")/_/husky.sh"

        # сюда нужно добавить скрипт, который запустится перед коммитом
        python3 test.py

<hr>
<hr>
ОБЩАЯ СТРУКТУРА WEBPACK:
 
    | КОРНЕВАЯ ПАПКА ПРОЕКТА
        -   | dist
        -   | node_modules
        -   | src
                -   | js
                        -   | common.js

                -   | index.js
        -   | index.html
        -   | package-lock.json
        -   | package.json
        -   | webpack.config.js