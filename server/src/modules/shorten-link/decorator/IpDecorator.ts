import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

import * as requestIp from 'request-ip';

//type SocketAddress = { address?: string; port: number };

export const IpAddress = createParamDecorator(
	(data: string, ctx: ExecutionContext) => {

	const req = ctx.switchToHttp().getRequest();

	console.log(req['X-Client-IP'])
	//if (req.clientIp)
		///return req.clientIp;

	//return requestIp.getClientIp(req);
});