import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { NotAuthorizedError } from '../errors/not-authorized.error';

export const verifyAuth = (req: Request, res: Response, next: NextFunction) =>
    passport.authenticate('jwt', { session: false }, (err: any, userId: any) => {
        if (err || !userId) {
            throw new NotAuthorizedError(err?.message ?? 'Unauthorized!');
        }

        req.user = userId;
        return next();
    })(req, res, next);
