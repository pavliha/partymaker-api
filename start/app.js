const path = require('path')
const moment = require('moment')

moment.locale('ru')

const local = name => path.join(__dirname, '..', 'providers', name)


/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/ally/providers/AllyProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/shield/providers/ShieldProvider',
  '@adonisjs/session/providers/SessionProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  'adonis-lucid-update-or-create/providers/UpdateOrCreateProvider',
  '@adonisjs/mail/providers/MailProvider',
  '@adonisjs/websocket/providers/WsProvider',
  '@adonisjs/drive/providers/DriveProvider',
  'adonis-bumblebee/providers/BumblebeeProvider',
  local('SmsProvider'),
  local('ImageProcessorProvider'),
]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  '@adonisjs/vow/providers/VowProvider',
  'adonis-bumblebee/providers/CommandsProvider'
]

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {
  Sms: 'App/Providers/Sms',
  ImageProcessor: 'App/Providers/ImageProcessor'
}

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = [
  'App/Commands/PicturesResizeCommand'
]

module.exports = { providers, aceProviders, aliases, commands }
