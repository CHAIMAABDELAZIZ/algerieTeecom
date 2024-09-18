import express from 'express';
import { createUser, getUser, updateUserDetails, deleteUserById } from '../controllers/userController.js';
import { login} from '../controllers/authController.js';


const router = express.Router();

router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUserDetails);
router.delete('/:id', deleteUserById);
router.post('/login', login);


export default router;
