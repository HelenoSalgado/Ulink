import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'role';
export const Roles = (...role: String[]) => SetMetadata(ROLES_KEY, role);