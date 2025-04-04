import { config } from "process";

export default ({env}) => ({
    'users-permissions':{
        config:{
            jwtSecret: env('JWT_SECRET')
        }
    }
});

