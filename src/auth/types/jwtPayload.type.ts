
export type JwtPayload = {
    email:string
    id:string
    roles: number[]
}

export type JwtRefreshPayload = {
    email:string
    id:string
}

export type RefreshWithTokenPayload = JwtRefreshPayload & {refreshToken:string}

export type refreshWithFirebasePayload = {

    firebaseToken:string;
}