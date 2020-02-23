// ================================
// Puerto
//=================================

import { Secret } from "jsonwebtoken";

process.env.PORT = process.env.PORT || '3000';

// ================================
// Entrorno
//=================================

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// ================================
// Vencimiento del token
//=================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = '48h';

// ================================
// Seed
//=================================

export const SEED: Secret = process.env.SEED || 'este-es-el-seed-de-desarrollo';
export const DB_HOST = process.env.DBHOST || 'localhost';
export const DB_NAME = process.env.DBNAME || 'petly';
export const DB_USERNAME = process.env.USERNAME || 'root';
export const DB_PASSWORD = process.env.PASSWORD || '';