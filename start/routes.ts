/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import OpenAiController from '#controllers/open_ais_controller';
// import OpenAIController from '#controllers/open_ais_controller';
import OpenAIController from '#controllers/open_ais_controller';
import router from '@adonisjs/core/services/router'

// router.on('/').render('pages/home')
router.post('/stream-openai',[OpenAIController, 'generate']);
