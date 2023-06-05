import { Router } from 'express';
import basketDeviceController from '../controllers/basketDeviceController.js';

const router = new Router();

router.get('/:id', basketDeviceController.getAll);

export default router;