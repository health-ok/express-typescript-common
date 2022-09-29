import { Strategy, ExtractJwt } from 'passport-jwt';


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_FOR_ACCESS_TOKEN,
};

export const jwtStrategy = new Strategy(
    opts,
    async (jwt_payload: any, next: any) => {
        const { userId } = jwt_payload;
       
        if (userId) {
            next(null, userId);
        } else {
            next(null, false);
        }
    }
);
