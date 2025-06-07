import dotenv from 'dotenv';

/** Init .env file */
dotenv.config();

import constants from '../config/constants.js';
import '../config/sequelize_relations.js';

/** Inserir as constantes na variavel global */
globalThis.CONSTANTS = constants;