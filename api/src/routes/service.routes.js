import Router from 'express';
import { createService, deleteService, getAllServices, getServiceById, updateService } from '../controllers/service.controller.js';

const router = Router();

router.post('/services', createService);
router.get('/services', getAllServices);
router.get('/services/:id', getServiceById);
router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

export default router;