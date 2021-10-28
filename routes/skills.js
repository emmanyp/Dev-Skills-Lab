import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js';
// import { app } from '../server.js'
// import * as skillDb from '../data/skill-db.js';
const router = Router()


router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

export {
  router
}
